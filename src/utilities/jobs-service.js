const BASE_URL = '/api/job'



export function newJob() {
    return sendRequest(`${BASE_URL}/new`, 'PUT');
  }
  