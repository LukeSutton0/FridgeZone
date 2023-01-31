import React from "react";
import classes from './MainScreen.module.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


const SignUp = () =>{
    return(
        <div className={classes.inputBox}>
          <Button variant="primary" onclick="">SignUp</Button>
          <Button variant="secondary">Login</Button>
        </div>
    )
}

export default SignUp;