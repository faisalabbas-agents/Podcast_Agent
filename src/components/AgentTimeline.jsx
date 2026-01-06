import React from 'react';

const AGENT_STEPS = [
  {
    key: 'news_research',
    title: 'News Research',
    description: 'Searching AI news from trusted sources (last 7 days)',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    key: 'financial_analysis',
    title: 'Financial Analysis',
    description: 'Enriching with market trends and adoption metrics',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    key: 'report_generation',
    title: 'Report Generation',
    description: 'Creating structured Markdown report',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    key: 'podcast_creation',
    title: 'Podcast Generation',
    description: 'Generating conversational audio with multi-speaker TTS',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
  },
];

export function AgentTimeline({ completedSteps = [], failedSteps = [], currentProgress, status }) {
  const getStepStatus = (stepKey) => {
    if (failedSteps.includes(stepKey)) return 'failed';
    if (completedSteps.includes(stepKey)) return 'completed';

    // Determine if step is currently active
    if (status === 'processing' || status === 'pending') {
      const stepIndex = AGENT_STEPS.findIndex(s => s.key === stepKey);
      const completedIndex = Math.max(
        ...AGENT_STEPS.map((s, i) => completedSteps.includes(s.key) ? i : -1)
      );

      if (stepIndex === completedIndex + 1) {
        return 'active';
      }
    }

    return 'pending';
  };

  const getStepClasses = (stepStatus) => {
    const baseClasses = 'agent-step';
    return `${baseClasses} ${stepStatus}`;
  };

  const getIconClasses = (stepStatus) => {
    switch (stepStatus) {
      case 'completed':
        return 'bg-green-500 text-white';
      case 'active':
        return 'bg-primary-500 text-white animate-pulse';
      case 'failed':
        return 'bg-red-500 text-white';
      default:
        return 'bg-slate-200 text-slate-400';
    }
  };

  return (
    <div className="glass-card p-6">
      <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
        <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
        Agent Pipeline
      </h2>

      <div className="space-y-3">
        {AGENT_STEPS.map((step, index) => {
          const stepStatus = getStepStatus(step.key);
          const isActive = stepStatus === 'active';

          return (
            <div key={step.key} className={getStepClasses(stepStatus)}>
              {/* Timeline connector */}
              {index < AGENT_STEPS.length - 1 && (
                <div className="absolute left-7 top-14 w-0.5 h-full -translate-x-1/2 bg-slate-200" />
              )}

              {/* Icon */}
              <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center ${getIconClasses(stepStatus)} transition-all duration-300`}>
                {stepStatus === 'completed' ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : stepStatus === 'failed' ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : stepStatus === 'active' ? (
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                ) : (
                  step.icon
                )}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-slate-900">{step.title}</h3>
                  {stepStatus !== 'pending' && (
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      stepStatus === 'completed' ? 'bg-green-100 text-green-700' :
                      stepStatus === 'failed' ? 'bg-red-100 text-red-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {stepStatus === 'completed' ? 'Done' :
                       stepStatus === 'failed' ? 'Failed' :
                       'In Progress'}
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-600 mt-1">
                  {step.description}
                </p>

                {/* Show current progress for active step */}
                {isActive && currentProgress && (
                  <p className="text-xs text-primary-600 mt-2 font-medium flex items-center gap-1">
                    <span className="inline-block w-1 h-1 bg-primary-600 rounded-full animate-pulse" />
                    {currentProgress}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Overall Status */}
      {status && (
        <div className="mt-4 pt-4 border-t border-slate-200">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-600">
              Progress: {completedSteps.length} / {AGENT_STEPS.length} steps
            </span>
            <span className="text-slate-600">
              {status === 'completed' ? '✓ All done!' :
               status === 'failed' ? '✗ Failed' :
               status === 'processing' ? '⟳ Working...' :
               '○ Waiting...'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}