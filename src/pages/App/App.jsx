import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../../pages/DashboardPage/Dashboard'
import WelcomePage from '../../pages/WelcomePage/WelcomePage'
import AuthPage from "../AuthPage/AuthPage.jsx"
import NavBar from "../../components/NavBar/NavBar.jsx"
import { getUser } from '../../utilities/users-service'
import SignUpForm from '../../components/SignUpForm/SignUpForm'


function App() {
  const [user, setUser] = useState(getUser())

  //test3@test.com

  return (
    <main className="App">
      {
        user ?
          <>
            {/* NavBar and Routes are only available when the user is logged in */}
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/" element={<SignUpForm />} />
            </Routes>
          </>
        :
          <AuthPage setUser={setUser} />
      }
    </main>
  )
}

export default App