import express from 'express';
import { createServer as createViteServer } from 'vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Request logging middleware
  app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
  });

  // Helper function to get current month string (YYYY-MM)
  const getCurrentMonth = () => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  };

  // Helper function to archive old logs
  const archiveOldLogs = async () => {
    const logDir = path.join(__dirname, 'logs');
    if (!fs.existsSync(logDir)) return;

    const currentMonth = getCurrentMonth();
    const items = fs.readdirSync(logDir);

    for (const item of items) {
      const itemPath = path.join(logDir, item);
      const stats = fs.statSync(itemPath);

      // Check if it's a directory and NOT the current month
      if (stats.isDirectory() && item !== currentMonth) {
        // It's an old month folder, archive it
        const zipPath = path.join(logDir, `${item}.zip`);
        
        console.log(`Archiving old logs: ${item}...`);
        
        try {
          // Dynamic import to avoid startup crashes if module resolution fails
          const archiverModule = await import('archiver');
          const archiver = archiverModule.default;

          const output = fs.createWriteStream(zipPath);
          const archive = archiver('zip', { zlib: { level: 9 } });

          output.on('close', () => {
            console.log(`${item}.zip created (${archive.pointer()} bytes). Deleting folder.`);
            fs.rmSync(itemPath, { recursive: true, force: true });
          });

          archive.on('error', (err: any) => {
            console.error('Archiving error:', err);
          });

          archive.pipe(output);
          archive.directory(itemPath, false);
          await archive.finalize();
        } catch (err) {
          console.error('Failed to load archiver or create archive:', err);
        }
      }
    }
  };

  // Run archiving check on startup
  archiveOldLogs();

  // API Routes
  app.post('/api/log-chat', (req, res) => {
    const { message, role, timestamp } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const logDir = path.join(__dirname, 'logs');
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir);
    }

    // Create month folder
    const currentMonth = getCurrentMonth();
    const monthDir = path.join(logDir, currentMonth);
    if (!fs.existsSync(monthDir)) {
      fs.mkdirSync(monthDir);
      // Trigger archiving check when a new month starts (new folder created)
      archiveOldLogs();
    }

    const date = new Date().toISOString().split('T')[0];
    const logFile = path.join(monthDir, `${date}.txt`);
    
    const logEntry = `[${timestamp}] ${role}: ${message}\n`;

    fs.appendFile(logFile, logEntry, (err) => {
      if (err) {
        console.error('Error writing to log file:', err);
        return res.status(500).json({ error: 'Failed to log message' });
      }
      res.json({ success: true });
    });
  });

  // Log Viewer API: List logs
  app.get('/api/logs/list', (req, res) => {
    const logDir = path.join(__dirname, 'logs');
    if (!fs.existsSync(logDir)) {
      return res.json({ files: [] });
    }

    const currentMonth = getCurrentMonth();
    const monthDir = path.join(logDir, currentMonth);
    
    let files: { name: string, type: 'file' | 'zip' }[] = [];

    // Get current month text files
    if (fs.existsSync(monthDir)) {
      const textFiles = fs.readdirSync(monthDir)
        .filter(f => f.endsWith('.txt'))
        .map(f => ({ name: f, type: 'file' as const }));
      files = [...files, ...textFiles];
    }

    // Get archived zip files from root log dir
    const zipFiles = fs.readdirSync(logDir)
      .filter(f => f.endsWith('.zip'))
      .map(f => ({ name: f, type: 'zip' as const }));
    
    files = [...files, ...zipFiles];

    res.json({ files });
  });

  // Log Viewer API: View content
  app.get('/api/logs/content', (req, res) => {
    const filename = req.query.filename as string;
    if (!filename) return res.status(400).send('Filename required');

    // Security check: prevent directory traversal
    if (filename.includes('..') || filename.includes('/')) {
      return res.status(400).send('Invalid filename');
    }

    const currentMonth = getCurrentMonth();
    const filePath = path.join(__dirname, 'logs', currentMonth, filename);

    if (!fs.existsSync(filePath)) {
      return res.status(404).send('File not found');
    }

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) return res.status(500).send('Error reading file');
      res.send(data);
    });
  });

  // Log Viewer API: Download zip
  app.get('/api/logs/download', (req, res) => {
    const filename = req.query.filename as string;
    if (!filename) return res.status(400).send('Filename required');

    if (filename.includes('..') || filename.includes('/')) {
      return res.status(400).send('Invalid filename');
    }

    const filePath = path.join(__dirname, 'logs', filename);
    if (!fs.existsSync(filePath)) {
      return res.status(404).send('File not found');
    }

    res.download(filePath);
  });

  // Catch-all for API routes to prevent falling through to Vite
  app.use('/api', (req, res) => {
    res.status(404).json({ error: 'API route not found' });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production static file serving (if needed, though usually handled by build output)
    app.use(express.static(path.join(__dirname, 'dist')));
    
    // Handle SPA routing in production
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
