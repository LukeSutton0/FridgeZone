import React, { Fragment, useState } from "react";
//import { scryRenderedComponentsWithType } from "react-dom/test-utils";
import { useSignUp } from "../../hooks/useSignUp";
import classes from './SignUp.module.css'

const SignUpForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [jobtitle, setJobTitle] = useState('');
    const [fullname, setFullName] = useState('');

    const {signup,error,isLoading} = useSignUp()

    const handleSubmit = async (e) =>{
        e.preventDefault() //stops page refreshing
        //call hook
        await signup(username,password,jobtitle,fullname)
    }




    return (
        <Fragment>
            <h1>SIGN UP</h1>
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
                    <label className={classes.formLabel}>Job Title</label>
                    <select
                    value={jobtitle}
                    onChange={(e)=>setJobTitle(e.target.value)}>
                        <option value="DeliveryDriver">DeliveryDriver</option>
                        <option value="HeadChef">HeadChef</option>
                        <option value="Chef">Chef</option>
                        <option value="Admin">Admin</option>
                        <option value="Supplier">Supplier</option>
                        <option value="HealthAndSafetyOfficer">Health and Safety Officer</option>
                    </select>
                    <label className={classes.formLabel}>Full Name</label>
                    <input 
                        type="text"
                        required
                        value={fullname}
                        placeholder = "Full Name"
                        onChange={(e) => setFullName(e.target.value)}/>

                    <button className={classes.btn} disabled={isLoading}>Submit</button>
                    {error && <div className="error">{error}</div>}
                </form>
            </div>
        </Fragment>
    )

}

export default SignUpForm;