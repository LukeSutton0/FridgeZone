import React from "react";
import classes from './SignUp.module.css'
const SignUp = () => {  
  return (
    <div className={classes.inputBox}>
      <h1>SIGN UP</h1>
      <div className={classes.form}>
        {/* Labels and inputs for form data */}
        <div className={classes.input}>
        <label className={classes.formLabel}>Full Name</label>
        <input  className={classes.formInput}/>
        </div>

        <div className={classes.input}>
        <label className={classes.formLabel}>Job Title</label>
        <input  className={classes.formInput} />
        </div>

        <div className={classes.input}>
        <label className={classes.formLabel}>Username</label>
        <input  className={classes.formInput}/>
        </div>

        <div className={classes.input}>
        <label className={classes.formLabel}>Password</label>
        <input className={classes.formInput}/>
        </div>

        <button className={classes.btn} type="submit">
          Sign Up
        </button>
      </div>
    </div>
  )
}

export default SignUp;