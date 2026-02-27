import React, { useState, useEffect } from 'react';

interface LogFile {
  name: string;
  type: 'file' | 'zip';
  size?: number;
}

const LogView: React.FC = () => {
  const [logs, setLogs] = useState<LogFile[]>([]);
  const [selectedLog, setSelectedLog] = useState<string | null>(null);
  const [logContent, setLogContent] = useState<string>('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchLogs();
  }, []);

  const fetchLogs = async () => {
    try {
      const response = await fetch('/api/logs/list');
      if (response.ok) {
        const data = await response.json();
        setLogs(data.files);
      }
    } catch (error) {
      console.error('Error fetching logs:', error);
    }
  };

  const handleViewLog = async (filename: string) => {
    setLoading(true);
    setSelectedLog(filename);
    try {
      const response = await fetch(`/api/logs/content?filename=${filename}`);
      if (response.ok) {
        const text = await response.text();
        setLogContent(text);
      } else {
        setLogContent('Error loading log content');
      }
    } catch (error) {
      setLogContent('Error loading log content');
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadZip = (filename: string) => {
    window.location.href = `/api/logs/download?filename=${filename}`;
  };

  const currentMonthLogs = logs.filter(log => log.type === 'file');
  const archivedLogs = logs.filter(log => log.type === 'zip');

  return (
    <div className="min-h-screen bg-gray-100 p-8 font-mono text-sm">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">System Logs Viewer</h1>
          <button 
            onClick={fetchLogs}
            className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-xs"
          >
            Refresh
          </button>
        </div>
        
        <div className="flex h-[calc(100vh-200px)]">
          {/* Sidebar */}
          <div className="w-1/3 border-r border-gray-200 overflow-y-auto bg-gray-50">
            <div className="p-4">
              <h2 className="font-bold text-gray-700 mb-2 uppercase text-xs tracking-wider">Current Month</h2>
              <ul className="space-y-1 mb-6">
                {currentMonthLogs.length === 0 && (
                  <li className="text-gray-400 italic text-xs">No logs for this month yet.</li>
                )}
                {currentMonthLogs.map(log => (
                  <li key={log.name}>
                    <button
                      onClick={() => handleViewLog(log.name)}
                      className={`w-full text-left px-3 py-2 rounded ${
                        selectedLog === log.name 
                          ? 'bg-blue-100 text-blue-700 font-medium' 
                          : 'hover:bg-gray-200 text-gray-600'
                      }`}
                    >
                      📄 {log.name}
                    </button>
                  </li>
                ))}
              </ul>

              <h2 className="font-bold text-gray-700 mb-2 uppercase text-xs tracking-wider border-t border-gray-200 pt-4">Archives (ZIP)</h2>
              <ul className="space-y-1">
                {archivedLogs.length === 0 && (
                  <li className="text-gray-400 italic text-xs">No archives available.</li>
                )}
                {archivedLogs.map(log => (
                  <li key={log.name}>
                    <button
                      onClick={() => handleDownloadZip(log.name)}
                      className="w-full text-left px-3 py-2 rounded hover:bg-gray-200 text-gray-600 flex justify-between items-center group"
                    >
                      <span>📦 {log.name}</span>
                      <span className="text-gray-400 group-hover:text-blue-600">⬇️</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Content Area */}
          <div className="w-2/3 flex flex-col bg-white">
            {selectedLog ? (
              <>
                <div className="p-3 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
                  <span className="font-medium text-gray-700">{selectedLog}</span>
                  {loading && <span className="text-gray-400 animate-pulse">Loading...</span>}
                </div>
                <div className="flex-1 overflow-auto p-4 bg-white">
                  <pre className="whitespace-pre-wrap break-words text-gray-800 font-mono text-xs leading-relaxed">
                    {logContent}
                  </pre>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-gray-400">
                Select a log file to view content
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogView;
