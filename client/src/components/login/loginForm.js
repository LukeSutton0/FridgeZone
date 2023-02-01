import React, { Fragment} from "react";
import { useState } from "react";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

import classes from './login.module.css'

const LoginForm = () => {

    const [UserName, setUserName] = useState('');
    const [Password, setPassword] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault() //stops page refreshing
        const data = {UserName,Password}
        console.log(data);
        //error checking client side
        // then send http
        sendPost(data)
    }


    const sendPost= (data) =>{
        fetch('http://localhost:3000',{
            method: "POST",
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json',
            },
            credentials: "omit",
            body: JSON.stringify(data)
        })
    }
    
    return (
        <Fragment>
            <h1>LOGIN</h1>
            <div className={classes.form}>
                <form onSubmit={handleSubmit}>
                    <label className={classes.formLabel}>Username</label>
                    <input 
                        type="text"
                        required
                        value={UserName}
                        placeholder = "Username"
                        onChange={(e) => setUserName(e.target.value)}/>
                    <label className={classes.formLabel}>Password</label>
                    <input 
                        type="password"
                        required
                        value={Password}
                        placeholder = "Password"
                        onChange={(e) => setPassword(e.target.value)}/>

                    <button className={classes.btn}>Submit</button>
                </form>
            </div>
        </Fragment>
    )

}

export default LoginForm;