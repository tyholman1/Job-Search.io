import { useEffect, useState } from "react"
// import { useNavigate } from "react-router-dom"
import * as jobServices from '../../utilities/jobs-service.js'
import DeleteForm from '../../components/DeleteForm/DeleteForm'
import UpdateUser from "../../components/UpdateForm/UpdateForm"
import NavBar from "../../components/NavBar/NavBar"

export default function Dashboard({user},{job}, props){
  //  const navigate = useNavigate()
  const [getSetJob, setGetSetJob] = useState(
    {
      title: '',
      description: '',
      location: '',
      sourceName: '',
      link: '',
      accepted: false,
      id: user.job._id 
    }
  )
      
      useEffect(() =>{
      const jobData = {...getSetJob}
      const newJob = jobServices.getJob(jobData)
       setGetSetJob(newJob)
      },[])
     
   

   
  return (
    <div>
      
      Job Title<br />
      <form action="" className="dashboard">
                <label>Job Title</label>
                {user.job.map((job, i)=>{
                return <li key={i}>{job.title}</li>
              })}
                <label>Job Decription</label>
                {user.job.map((job, i)=>{
                return <li key={i}>{job.description}</li>
              })} 
                <label>Job Location</label>
                {user.job.map((job, i)=>{
                return <li key={i}>{job.location}</li>
              })}                
                <label>Job Source Name</label>
                {user.job.map((job, i)=>{
                return <li key={i}>{job.sourceName}</li>
              })}
                <label>Job link</label>
                {getSetJob.link}
                <label>Accepted</label>
                {getSetJob.accepted}
            </form>
    </div>
  )

}