import { render } from "@testing-library/react";
import React from "react";
import classes from './SignUp.module.css'

class SignUpForm extends React.Component{




    render(){
        return(
            <form>
                <label for="UserName">UserName
                <input type="text" id="UserName" name="UserName" value="?"/>
                </label>
                <label for="Password">Password
                <input type="text" id="Password" name="Password" value="?"/>
                </label>
                <label for="Job Title">Job Title
                <input type="select" id="UserName" name="UserName" value="?"/>
                </label>
                <label for="FullName">FullName
                <input type="text" id="FullName" name="FullName" value="?"/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
            <h1>Sign Up</h1>
            <p>para</p>
        );
    }
}

export default SignUpForm;