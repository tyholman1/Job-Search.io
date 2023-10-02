import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../../pages/DashboardPage/Dashboard'
import NewJobPage from "../NewJobPage/NewJobPage";
import AuthPage from "../AuthPage/AuthPage.jsx"
import NavBar from "../../components/NavBar/NavBar.jsx"
import { getUser } from '../../utilities/users-service'
import { getJob } from '../../utilities/jobs-service';
import logo from '../../../pictures/js-logo.jpg'

function App() {
  const [user, setUser] = useState(getUser())
  const [job, setJob] = useState(getJob())

  //test3@test.com

  return (
    <main className="App">
      {
        user ?
          <>
            <img src={logo} alt="" />
            {/* NavBar and Routes are only available when the user is logged in */}
            <NavBar user={user} setUser={setUser} setJob={setJob}/>
            <Routes>
              <Route path="/dashboard" element={<Dashboard user={user} job={job} />} />
              <Route path="/new" element={<NewJobPage user={user} job={job} />} />

            </Routes>
          </>
        :
          <AuthPage setUser={setUser} />
      }
    </main>
  )
}

export default App