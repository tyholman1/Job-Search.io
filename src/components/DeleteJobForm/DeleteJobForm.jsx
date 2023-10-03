import { useState } from "react";
import * as userServices from "../../utilities/users-service";


export default function DeleteFormJob({user}) {
  const [jobData, setjobData] = useState({
    title: ""
  });
  const [error, setError] = useState("");

  const userId = user._id
  function handleChange(evt) {
    setjobData({ ...jobData, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {    
        console.log("submitted")
      const job = await userServices.deleteJob(jobData, userId);
      console.log(job)
      alert("Job Deleted")
      
    } catch {
      setError("Unable to delete");
    }
  }
  return (
    <div className="form-container">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>Enter the job title you want to delete:</label>
        <input
          type="text"
          name="title"
          value={jobData.title}
          onChange={handleChange}
          required
        />
        <button type="submit">DELETE JOB</button>
      </form>
    </div>
  );
}