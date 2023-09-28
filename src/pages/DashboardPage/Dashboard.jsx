export default function Dashboard(){
   const job = this.props.job 
    return (
        <div>
          Job Title{job.title}
          Job Description{job.description}
          Job Location{job.location}
          Job Source{job.sourceName}
          Job link{job.link}
          Accepted{job.accepted}
          <input type="submit" value='Submit New Job' />
        </div>
    )
}

