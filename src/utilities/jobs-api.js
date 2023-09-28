const BASE_URL = '/api/job'

export function create(jobData) {
    return sendRequest(BASE_URL, 'POST', jobData);
  }
  
  export function updateJob(jobData){
    return sendRequest(BASE_URL, 'PUT', jobData)
  }
    
  export function deleteJob(jobData){
    return sendRequest(BASE_URL, "DELETE", jobData)
  }
  async function sendRequest(url, method = 'GET', payload = null) {
    // Fetch accepts an options object as the 2nd argument
    // used to include a data payload, set headers, etc.
    const options = { method };
    if (payload) {
      options.headers = { 'Content-Type': 'application/json' };
      options.body = JSON.stringify(payload);
    }
    
    const backendResponse = await fetch(url, options);
    // res.ok will be false if the status code set to 4xx in the controller action
    if (backendResponse.ok) return backendResponse.json();
    throw new Error('Bad Request');

}

    
