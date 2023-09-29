import { useState } from 'react'
import * as userServices from '../../utilities/users-service'

export default function NewJobPage({user}){
    
    const [job, setJob] = useState({
        title:'',
        description:'',
        location: '',
        sourceName: '',
        link: '',
        accepted: false,
        id: user._id 
    })



    function handleChange(evt){
        setJob({...job, [evt.target.name]: evt.target.value})
    }

    const handleSubmit = async (evt)=>{
        evt.preventDefault()
        try {
            const jobData = {...job}
            const newJob = await userServices.createJob(jobData)
            setJob(newJob)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
            <label>Job Title</label>
            <input type="text" name="title" value={job.title} onChange={handleChange}/>
            <label>Job Decription</label>
            <input type="textarea" name="description" value={job.description} onChange={handleChange} />
            <label>Job Location</label>
            <input type="text" name="location" value={job.location} onChange={handleChange} />
            <label>Job Source Name</label>
            <input type="text" name="sourceName" value={job.sourceName} onChange={handleChange} />
            <label>Job link</label>
            <input type="text" name="link"  value={job.link} onChange={handleChange}/>
            <label>Accepted</label>
            <input type="checkbox" name="accepted" onClick={()=>{setJob({...job, accepted: !job.accepted})}}/>
            <button type="submit">Submit</button>
        </form>
    </div> 
    )
}