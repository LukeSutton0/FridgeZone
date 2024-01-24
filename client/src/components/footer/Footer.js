import React from "react";
import classes from './Footer.module.css'
import {Link,Navigate, useNavigate} from 'react-router-dom'
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

const MainFooter = () =>{
    const { isAuthenticated } = useAuthContext();
    const {logout} = useLogout()
    const {user} = useAuthContext()
    const navigate = useNavigate()
    const handleClick = () =>{
        logout()
        navigate('/');
    }

    return(
        <div className={classes.footerContainer}>
           <Link to="/" className={classes.footerButton} element={isAuthenticated ? <Navigate to="/home"/> : <Navigate to="/" />}>Home</Link>
            {user && (
                <div className={classes.footerDivFlex}>
                    <p>User: {user.username}</p>
                    <button onClick={handleClick} className={`${classes.logOutButton} ${classes.footerButton}`}>Log Out</button>
                </div>
            )}
            {!user && (
                <div className={classes.footerDivFlex}>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/login">Login</Link>
                </div>
            )}
      </div>
    )
}

export default MainFooter;