// import { getToken } from './jobs-service';

// const BASE_URL = '/api/jobs';



// export function getJob(){
//   return sendRequest(`${BASE_URL}/dashboard`)
// }

// export function deleteJob(deleteJob) {
//   console.log("whatever")
//   return sendRequest(`${BASE_URL}/dashboard/${deleteJob}`, 'DELETE')
// }

// export function checkToken() {
//   return sendRequest(`${BASE_URL}/check-token`);
// }
// // export function updateJob(jobData) {
// //   return sendRequest(BASE_URL, "PUT", jobData)
// // }
// async function sendRequest(url, method = 'GET', payload = null) {
//   // Fetch accepts an options object as the 2nd argument
//   // used to include a data payload, set headers, etc.
//   const options = { method };
//   if (payload) {
//     options.headers = { 'Content-Type': 'application/json' };
//     options.body = JSON.stringify(payload);
//   }

//   const token = getToken();
//   if (token) {
//     // Ensure the headers object exists
//     options.headers = options.headers || {};

//     // Add token to an Authorization header
//     // Prefacing with 'Bearer' is recommended in the HTTP specification
//     options.headers.Authorization = `Bearer ${token}`;
//   }

//   const backendResponse = await fetch(url, options);
//   // res.ok will be false if the status code set to 4xx in the controller action
//   if (backendResponse.ok) return backendResponse.json();
//   throw new Error('Bad Request');
// }
