//import { render } from "@testing-library/react";
import React, { Fragment} from "react";
import { useState } from "react";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

import classes from './SignUp.module.css'

const SignUpForm = () => {

    const [UserName, setUserName] = useState('');
    const [Password, setPassword] = useState('');
    const [JobTitle, setJobTitle] = useState('');
    const [FullName, setFullName] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault() //stops page refreshing
        const data = {UserName,Password,JobTitle,FullName}
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
            <h1>SIGN UP</h1>
            <div className={classes.form}>
                <form onSubmit={handleSubmit}>
                    <label>Username:</label>
                    <input 
                        type="text"
                        required
                        value={UserName}
                        placeholder = "Johndoe123"
                        onChange={(e) => setUserName(e.target.value)}/>
                    <label>Password:</label>
                    <input 
                        type="text"
                        required
                        value={Password}
                        placeholder = "Password123"
                        onChange={(e) => setPassword(e.target.value)}/>
                    <select
                    value={JobTitle}
                    onChange={(e)=>setJobTitle(e.target.value)}>
                        <option value="DeliveryDriver">DeliveryDriver</option>
                        <option value="HeadChef">HeadChef</option>
                        <option value="Chef">Chef</option>
                        <option value="Admin">Admin</option>
                        <option value="Supplier">Supplier</option>
                        <option value="HealthAndSafetyOfficer">Health and Safety Officer</option>
                    </select>
                    <label>Full Name:</label>
                    <input 
                        type="text"
                        required
                        value={FullName}
                        placeholder = "Johnathon Doedecahedron"
                        onChange={(e) => setFullName(e.target.value)}/>

                    <button>Submit</button>
                </form>
            </div>
        </Fragment>
    )

}

export default SignUpForm;