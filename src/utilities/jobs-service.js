// import { getJobNow } from "../../controllers/api/jobs.cjs";
import * as jobAPI from "./jobs-api"

export async function getJob(jobData){
  const token = await jobAPI.getJob(jobData)
  localStorage.setItem('token', token)
  return getUser()
}

// export async function setNewJob(jobData) {
//     const token = await jobAPI.setNewJob(jobData);
//     //persist the "token"
//     localStorage.setItem('token', token);
//     // Baby step by returning whatever is sent back by the server
//     return getJob()
//   }
export function getUser() {
  const token = getToken();
  // If there's a token, return the user in the payload, otherwise return null
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
  }

export function getToken() {
  // getItem returns null if there's no string
  const token = localStorage.getItem('token');
  if (!token) return null;
    // Obtain the payload of the token
  const payload = JSON.parse(atob(token.split('.')[1]));
            // A JWT's exp is expressed in seconds, not milliseconds, so convert
  if (payload.exp < Date.now() / 1000) {
             // Token has expired - remove it from localStorage
  localStorage.removeItem('token');
  return null;
  }
  return token;
}
   
    
//     export function getJob() {
//     const token = getToken();
//     // If there's a token, return the user in the payload, otherwise return null
//     return token ? JSON.parse(atob(token.split('.')[1])).user : null;
//     }
    
//     export function checkToken(){
//         // Just so that you don't forget how to use .then
//         return usersAPI.checkToken()
//           // checkToken returns a string, but let's
//           // make it a Date object for more flexibility
//           .then(dateStr => new Date(dateStr));
// }

    