const API_BASE_URL = 'https://podcastagentbackend-production.up.railway.app/api/v1';

export const podcastApi = {
  /**
   * Create a new podcast generation job
   * @param {string} topic - The AI/tech topic to research
   * @param {boolean} skipPodcast - Skip podcast audio generation
   * @param {boolean} skipFinancial - Skip financial analysis
   * @returns {Promise<Object>} Job creation response with job_id
   */
  async createJob(topic, skipPodcast = false, skipFinancial = false) {
    const response = await fetch(`${API_BASE_URL}/jobs/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        topic,
        skip_podcast: skipPodcast,
        skip_financial: skipFinancial,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to create job');
    }

    return response.json();
  },

  /**
   * Get job status and results
   * @param {string} jobId - The job ID to check
   * @returns {Promise<Object>} Job status response
   */
  async getJobStatus(jobId) {
    const response = await fetch(`${API_BASE_URL}/jobs/${jobId}`);

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to fetch job status');
    }

    return response.json();
  },

  /**
   * Get API health status
   * @returns {Promise<Object>} Health check response
   */
  async getHealth() {
    const response = await fetch(`${API_BASE_URL}/health`);

    if (!response.ok) {
      throw new Error('Health check failed');
    }

    return response.json();
  },

  /**
   * Download a report file
   * @param {string} filename - Report filename
   * @returns {Promise<string>} Report content as text
   */
  async downloadReport(filename) {
    const response = await fetch(`${API_BASE_URL}/reports/${filename}`);

    if (!response.ok) {
      throw new Error('Failed to download report');
    }

    return response.text();
  },

  /**
   * Get podcast audio URL
   * @param {string} filename - Podcast filename
   * @returns {string} Full URL to audio file
   */
  getPodcastUrl(filename) {
    return `${API_BASE_URL}/podcasts/${filename}`;
  },

  /**
   * List all reports
   * @returns {Promise<Array>} List of report files
   */
  async listReports() {
    const response = await fetch(`${API_BASE_URL}/reports`);

    if (!response.ok) {
      throw new Error('Failed to list reports');
    }

    return response.json();
  },

  /**
   * List all podcasts
   * @returns {Promise<Array>} List of podcast files
   */
  async listPodcasts() {
    const response = await fetch(`${API_BASE_URL}/podcasts`);

    if (!response.ok) {
      throw new Error('Failed to list podcasts');
    }

    return response.json();
  },

  /**
   * Get API statistics
   * @returns {Promise<Object>} API statistics
   */
  async getStats() {
    const response = await fetch(`${API_BASE_URL}/stats`);

    if (!response.ok) {
      throw new Error('Failed to fetch statistics');
    }

    return response.json();
  },
};