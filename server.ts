import express from 'express';
import { createServer as createViteServer } from 'vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

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

    const date = new Date().toISOString().split('T')[0];
    const logFile = path.join(logDir, `${date}.txt`);
    
    const logEntry = `[${timestamp}] ${role}: ${message}\n`;

    fs.appendFile(logFile, logEntry, (err) => {
      if (err) {
        console.error('Error writing to log file:', err);
        return res.status(500).json({ error: 'Failed to log message' });
      }
      res.json({ success: true });
    });
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
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
