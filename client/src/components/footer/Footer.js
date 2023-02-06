import React from "react";
import classes from './Footer.module.css'
import {Link, useNavigate} from 'react-router-dom'
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

const MainFooter = () =>{

    const {logout} = useLogout()
    const {user} = useAuthContext()
    const navigate = useNavigate()

    const handleClick = () =>{
        logout()
        navigate('/');
    }

    return(
        <div className={classes.footerContainer}>
           <Link to="">Home</Link>
            {user && (
            <div>
                <span>{user.username}</span>
                <button onClick={handleClick}>Log Out</button>
            </div>
            )}
            {!user && (
            <div>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
            </div>
            )}
      </div>
    )
}

export default MainFooter;