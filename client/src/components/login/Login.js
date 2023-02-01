import React from "react";
import classes from './login.module.css'
import LoginForm from './loginForm'
const Login = () =>{
    return(
        <div className={classes.inputBox}>
          <LoginForm/>
        </div>
    )
}

export default Login;