import { useState } from "react";
import * as userServices from "../../utilities/users-service";


export default function UpdateJob({user}) {
  const [updateJob, setUpdateJob] = useState({
    title: "",
  });
  const [error, setError] = useState("");

  const userId = user._id
  function handleChange(evt) {
    setUpdateJob({ ...updateJob, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {   
        const jobData = {...updateJob} 
        console.log(jobData)
      const job = await userServices.updatedjob(jobData, userId);
      setUpdateJob(job)   
      console.log("this works")
      alert("Job Updated")
    //   return job
    } catch {
      setError("Unable to update");
    }
  }
  return (
    <div className="form-container">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>Enter the job title you want to update:</label>
        <input
          type="text"
          name="title"
          value={updateJob.title}
          onChange={handleChange}
          required
        />
        <button type="submit">UPDATE JOB</button>
      </form>
    </div>
  );
}