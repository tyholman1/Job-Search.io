//useHistory to track the user history 
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SignUpForm from '../../components/SignUpForm/SignUpForm.jsx'
import LoginForm from '../../components/LoginForm/LoginForm.jsx'

import logo from '../../../pictures/js-logo.jpg'


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
    navigate('/welcome')
    }


    return (
      <div>
        <img src={logo} alt="" />
        <h1>JobSearch.io</h1>
          {!show ?  
          <>
          <SignUpForm setUser={props.setUser}/> 
          
          <button onClick ={logInButton} type='submit'>Login</button>
          </>:
          <>
          <LoginForm setUser={props.setUser}/> 
          {show ?
          <>
          <button onClick ={signUpButton} type='submit'>Sign In</button>
          </>
          :
          <LoginForm setUser={props.setUser}/>
          }
          </>
       }
       </div>
        )
        }




