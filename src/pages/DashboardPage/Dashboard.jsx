import { useEffect, useState } from "react"

export default function Dashboard({user}){
   
  const [job, setJob] = useState(
    {
      title: '',
      description: '',
      location: '',
      sourceName: '',
      link: '',
      accepted: false,
      // id: user._id 
    }
  )

  return (
    <div>
      Job Title<br />
      <div>
        {job.title}
      </div>
    </div>
  )

}