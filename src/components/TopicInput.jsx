import React, { useState } from 'react';

export function TopicInput({ onSubmit, isLoading, disabled }) {
  const [topic, setTopic] = useState('');
  const [skipPodcast, setSkipPodcast] = useState(false);
  const [skipFinancial, setSkipFinancial] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (topic.trim() && !isLoading && !disabled) {
      onSubmit(topic.trim(), skipPodcast, skipFinancial);
    }
  };

  return (
    <div className="glass-card p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Topic Input */}
        <div>
          <label htmlFor="topic" className="block text-sm font-medium text-slate-700 mb-2">
            Research Topic
          </label>
          <input
            type="text"
            id="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g., AI agents in healthcare, Claude AI updates..."
            disabled={isLoading || disabled}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all disabled:bg-slate-50 disabled:text-slate-500 disabled:cursor-not-allowed"
            required
          />
          <p className="mt-2 text-xs text-slate-500">
            Enter an AI or technology topic to research and generate a podcast
          </p>
        </div>

        {/* Options */}
        <div className="flex flex-wrap gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={skipPodcast}
              onChange={(e) => setSkipPodcast(e.target.checked)}
              disabled={isLoading || disabled}
              className="w-4 h-4 text-primary-600 border-slate-300 rounded focus:ring-primary-500 disabled:cursor-not-allowed"
            />
            <span className="text-sm text-slate-700">
              Skip podcast generation (faster)
            </span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={skipFinancial}
              onChange={(e) => setSkipFinancial(e.target.checked)}
              disabled={isLoading || disabled}
              className="w-4 h-4 text-primary-600 border-slate-300 rounded focus:ring-primary-500 disabled:cursor-not-allowed"
            />
            <span className="text-sm text-slate-700">
              Skip financial analysis
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading || disabled || !topic.trim()}
          className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 transition-all disabled:bg-slate-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>Creating Job...</span>
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Generate Podcast</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}