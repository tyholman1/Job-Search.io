//useHistory to track the user history 
import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import SignUpForm from '../../components/SignUpForm/SignUpForm.jsx'
import LoginForm from '../../components/LoginForm/LoginForm.jsx'
import { Link, Route, Routes } from 'react-router-dom'
import { set } from 'mongoose'


export default function AuthPage(props) {
  const [show, setShow] = useState(null);
  const navigate = useNavigate()

const logInButton = () => {
    setShow({LoginForm})
    navigate("/login")
  } 
  // useEffect(()=>{
  //     setShow({LoginForm})
  //   },[SignUpForm])

    const signUpButton = () => {
    setShow(null)
    navigate('/')
    }


    return (
      <div>
        <h1>JobSearch.io</h1>
          {!show ?  
          <>
          <SignUpForm/> 
          
          <button onClick ={logInButton} type='submit'>Login</button>
          </>:
          <>
          <LoginForm/> 
          {show ?
          <>
          <button onClick ={signUpButton} type='submit'>Sign In</button>
          </>
          :
          <LoginForm />
          }
          </>
       }
       </div>
        )
        }




