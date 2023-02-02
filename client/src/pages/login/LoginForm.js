import React, { Fragment} from "react";
import { useState } from "react";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

import classes from './Login.module.css'

const LoginForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault() //stops page refreshing
        const data = {username,password}
        //error checking client side
        //sendPost(data)
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
                        value={username}
                        placeholder = "Username"
                        onChange={(e) => setUsername(e.target.value)}/>
                    <label className={classes.formLabel}>Password</label>
                    <input 
                        type="password"
                        required
                        value={password}
                        placeholder = "Password"
                        onChange={(e) => setPassword(e.target.value)}/>

                    <button className={classes.btn}>Submit</button>
                </form>
            </div>
        </Fragment>
    )

}

export default LoginForm;