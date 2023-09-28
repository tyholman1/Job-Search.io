import { Link } from "react-router-dom"
import * as userService from "../../utilities/users-service"


function NavBar(props) {

    const handleLogOut = () =>{
    // Delegate to the users-service
  userService.logOut();
  // Update state will also cause a re-render
  props.setUser(null);
    }

  return (
    <nav>
      <Link to="/">Home</Link>
      &nbsp; | {" "}
      <Link to="/dashboard">Job List</Link>
      &nbsp; | {" "}
      <Link to="/new">New Job</Link>
      <br/>
      <Link to="" onClick={handleLogOut}>Log Out</Link>
      <h1>Welcome, {props.user.name}</h1>
      
      <br/>
    </nav>
  )
}

export default NavBar