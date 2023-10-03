import { useEffect, useState } from "react"
import DeleteJobForm from "../../components/DeleteJobForm/DeleteJobForm.jsx"
import UpdateJob from "../../components/UpdateJobForm/UpdateJobForm.jsx"
import UpdateForm from "../../components/UpdateForm/UpdateForm.jsx"

export default function Dashboard({user, job}, props){
  //  const navigate = useNavigate()
  const [getSetJob, setGetSetJob] = useState(
    {
      title: '',
      description: '',
      location: '',
      sourceName: '',
      link: '',
      accepted: false,
      id: user._id
    }
  )
      
      // useEffect(() =>{
      // const jobData = {...getSetJob}
      // const newJob = userServices.getJob(jobData)
      //  setGetSetJob(newJob)
      // },[setGetSetJob])  
      
      
  return (
    <div>
      
      Job Title<br />
      <form autoComplete ="off" className="dashboard">
                <label>Job Title</label>
                {user.job && user.job.map((job, id)=>{
                return <li key={id}> 
                {job.title} </li>
              })}            
                <label>Job Location</label>
                {user.job && user.job.map((job, k)=>{
                return <li key={k}>{job.location}</li>
              })}                
                <label>Job Source Name</label>
                {user.job && user.job.map((job, l)=>{
                return <li key={l}>{job.sourceName}</li>
              })}
                <label>Job link</label>
                {getSetJob.link}
                <label>Accepted</label>
                {getSetJob.accepted} 
            </form>
            <UpdateForm user={user}/>
            <DeleteJobForm user={user} />
            <UpdateJob user={user} />
    </div>
  )

}