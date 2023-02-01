import React from "react";
import classes from './login.module.css'
const Login = () => {  
  return (
    <div className={classes.inputBox}>
      <h1>LOGIN</h1>
      <div className={classes.form}>

        <div className={classes.input}>
        <label className={classes.formLabel}>Username</label>
        <input  className={classes.formInput}/>
        </div>

        <div className={classes.input}>
        <label className={classes.formLabel}>Password</label>
        <input className={classes.formInput}/>
        </div>

        <button className={classes.btn} type="submit">
          LOG IN
        </button>
      </div>
    </div>
  )
}

export default Login;