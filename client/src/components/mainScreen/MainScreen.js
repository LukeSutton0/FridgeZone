import React from "react";
import classes from './MainScreen.module.css'
import globalStyles from '../../Assets/global-styles/bootstrap.min.module.css'

const SignUp = () =>{
    return(
        <div className={classes.inputBox}>
          <button className={globalStyles.btn,globalStyles.btn-primary}> Bootstrap Button </button>
          <p>Login</p>
          <p>Sign Up</p>
        </div>
    )
}

export default SignUp;