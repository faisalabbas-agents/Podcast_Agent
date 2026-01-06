import React from 'react';
import { Header } from './components/Header';
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <Header />
      <main>
        <Dashboard />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white/50 backdrop-blur-sm mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-slate-600">
              © 2026 AI News Podcast Agent. Powered by{' '}
              <span className="font-semibold text-slate-700">OpenAI GPT-4o-mini</span> & <span className="font-semibold text-slate-700">OpenAI TTS-1</span>
            </div>

            <div className="flex items-center gap-6 text-sm">
              <a
                href="/api/v1/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-primary-600 transition-colors"
              >
                API Documentation
              </a>
              <a
                href="/api/v1/health"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-primary-600 transition-colors"
              >
                System Health
              </a>
              <a
                href="/api/v1/stats"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-primary-600 transition-colors"
              >
                Statistics
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;