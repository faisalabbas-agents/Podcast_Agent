import { useState, useEffect, useCallback } from 'react';
import { podcastApi } from '../api/podcastApi';

export function usePodcastAgent() {
  const [jobId, setJobId] = useState(null);
  const [status, setStatus] = useState('idle'); // idle, pending, processing, completed, failed
  const [progress, setProgress] = useState('');
  const [topic, setTopic] = useState('');
  const [reportPath, setReportPath] = useState(null);
  const [audioPath, setAudioPath] = useState(null);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [failedSteps, setFailedSteps] = useState([]);
  const [errorMessages, setErrorMessages] = useState([]);
  const [executionTime, setExecutionTime] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Poll job status
  useEffect(() => {
    if (!jobId || (status !== 'pending' && status !== 'processing')) {
      return;
    }

    const pollInterval = setInterval(async () => {
      try {
        const response = await podcastApi.getJobStatus(jobId);

        setStatus(response.status);
        setProgress(response.progress || '');
        setReportPath(response.report_path);
        setAudioPath(response.audio_path);
        setCompletedSteps(response.completed_steps || []);
        setFailedSteps(response.failed_steps || []);
        setErrorMessages(response.error_messages || []);
        setExecutionTime(response.execution_time_seconds);

        // Stop polling if job is finished
        if (response.status === 'completed' || response.status === 'failed') {
          clearInterval(pollInterval);
        }
      } catch (err) {
        console.error('Error polling job status:', err);
        setError(err.message);
        clearInterval(pollInterval);
      }
    }, 2000); // Poll every 2 seconds

    return () => clearInterval(pollInterval);
  }, [jobId, status]);

  /**
   * Create a new podcast generation job
   */
  const createJob = useCallback(async (topicInput, skipPodcast = false, skipFinancial = false) => {
    try {
      setIsLoading(true);
      setError(null);
      setStatus('idle');
      setJobId(null);
      setReportPath(null);
      setAudioPath(null);
      setCompletedSteps([]);
      setFailedSteps([]);
      setErrorMessages([]);
      setExecutionTime(null);

      const response = await podcastApi.createJob(topicInput, skipPodcast, skipFinancial);

      setJobId(response.job_id);
      setStatus(response.status);
      setTopic(topicInput);
      setProgress('Job created, waiting to start...');

      return response;
    } catch (err) {
      setError(err.message);
      setStatus('failed');
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * Manually fetch job status
   */
  const fetchJobStatus = useCallback(async () => {
    if (!jobId) return;

    try {
      const response = await podcastApi.getJobStatus(jobId);

      setStatus(response.status);
      setProgress(response.progress || '');
      setReportPath(response.report_path);
      setAudioPath(response.audio_path);
      setCompletedSteps(response.completed_steps || []);
      setFailedSteps(response.failed_steps || []);
      setErrorMessages(response.error_messages || []);
      setExecutionTime(response.execution_time_seconds);

      return response;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, [jobId]);

  /**
   * Reset the agent state
   */
  const reset = useCallback(() => {
    setJobId(null);
    setStatus('idle');
    setProgress('');
    setTopic('');
    setReportPath(null);
    setAudioPath(null);
    setCompletedSteps([]);
    setFailedSteps([]);
    setErrorMessages([]);
    setExecutionTime(null);
    setIsLoading(false);
    setError(null);
  }, []);

  return {
    // State
    jobId,
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

    // Actions
    createJob,
    fetchJobStatus,
    reset,

    // Computed
    isActive: status === 'pending' || status === 'processing',
    isCompleted: status === 'completed',
    isFailed: status === 'failed',
    hasReport: !!reportPath,
    hasAudio: !!audioPath,
  };
}