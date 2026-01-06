import React from 'react';
import { usePodcastAgent } from '../hooks/usePodcastAgent';
import { TopicInput } from '../components/TopicInput';
import { AgentTimeline } from '../components/AgentTimeline';
import { ReportViewer } from '../components/ReportViewer';
import { AudioPlayer } from '../components/AudioPlayer';
import { StatusBadge } from '../components/StatusBadge';
import { formatExecutionTime } from '../utils/formatters';

export function Dashboard() {
  const {
    status,
    progress,
    topic,
    reportPath,
    audioPath,
    completedSteps,
    failedSteps,
    errorMessages,
    executionTime,
    isLoading,
    error,
    createJob,
    reset,
    isActive,
    isCompleted,
    isFailed,
    hasReport,
    hasAudio,
  } = usePodcastAgent();

  const handleSubmit = async (topicInput, skipPodcast, skipFinancial) => {
    try {
      await createJob(topicInput, skipPodcast, skipFinancial);
    } catch (err) {
      console.error('Failed to create job:', err);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-3">
          Autonomous AI News Research
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Enter any AI or technology topic. Our multi-agent system will research news, analyze market trends, generate a comprehensive report, and create a podcast—all automatically.
        </p>
      </div>

      {/* Topic Input */}
      <div className="mb-8">
        <TopicInput
          onSubmit={handleSubmit}
          isLoading={isLoading}
          disabled={isActive}
        />
      </div>

      {/* Error Display */}
      {error && (
        <div className="mb-8 bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="flex-1">
              <h3 className="text-sm font-medium text-red-800">Error</h3>
              <p className="text-sm text-red-700 mt-1">{error}</p>
            </div>
            <button
              onClick={reset}
              className="text-red-600 hover:text-red-800 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Job Status Card */}
      {(isActive || isCompleted || isFailed) && (
        <div className="glass-card p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <StatusBadge status={status} />
              <div>
                <h3 className="font-semibold text-slate-900">{topic}</h3>
                {progress && (
                  <p className="text-sm text-slate-600 mt-1">{progress}</p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-4">
              {executionTime && (
                <span className="text-sm text-slate-600">
                  <svg className="w-4 h-4 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {formatExecutionTime(executionTime)}
                </span>
              )}

              {(isCompleted || isFailed) && (
                <button
                  onClick={reset}
                  className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors text-sm font-medium"
                >
                  New Research
                </button>
              )}
            </div>
          </div>

          {/* Error Messages */}
          {errorMessages.length > 0 && (
            <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <h4 className="text-sm font-medium text-amber-900 mb-2">Issues Encountered:</h4>
              <ul className="text-sm text-amber-800 space-y-1 list-disc list-inside">
                {errorMessages.map((msg, index) => (
                  <li key={index}>{msg}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Main Content Grid */}
      {(isActive || isCompleted || isFailed) && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Timeline */}
          <div>
            <AgentTimeline
              completedSteps={completedSteps}
              failedSteps={failedSteps}
              currentProgress={progress}
              status={status}
            />
          </div>

          {/* Right Column - Results */}
          <div className="space-y-8">
            {/* Report Viewer */}
            {hasReport && <ReportViewer reportPath={reportPath} />}

            {/* Audio Player */}
            {hasAudio && <AudioPlayer audioPath={audioPath} />}

            {/* Placeholder when no results yet */}
            {!hasReport && !hasAudio && isActive && (
              <div className="glass-card p-12 text-center">
                <svg className="w-16 h-16 mx-auto text-slate-300 mb-4 animate-pulse-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-slate-500 font-medium">
                  Agents are working...
                </p>
                <p className="text-sm text-slate-400 mt-2">
                  Results will appear here once ready
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Empty State */}
      {!isActive && !isCompleted && !isFailed && (
        <div className="glass-card p-12 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Ready to Generate
            </h3>
            <p className="text-slate-600">
              Enter a topic above to start the AI research and podcast generation process. Our agent system will handle everything automatically.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <div className="bg-slate-50 p-4 rounded-lg">
                <div className="font-semibold text-slate-900 mb-1">📰 News Research</div>
                <div className="text-slate-600">Trusted sources only</div>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <div className="font-semibold text-slate-900 mb-1">💰 Market Analysis</div>
                <div className="text-slate-600">Financial context</div>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <div className="font-semibold text-slate-900 mb-1">📝 Full Report</div>
                <div className="text-slate-600">Structured Markdown</div>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <div className="font-semibold text-slate-900 mb-1">🎙️ Podcast Audio</div>
                <div className="text-slate-600">Multi-speaker TTS</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}