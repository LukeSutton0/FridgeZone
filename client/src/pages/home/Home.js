import React from "react";
import classes from './Home.module.css'
import { useAuthContext } from "../../hooks/useAuthContext";

const Home = () => {  
    const {user} = useAuthContext()

    return (
        <div className={classes.inputBox}>
        <p>Home Page</p>
        {user && (
        <p>{user.username}</p>
        )}
        <div className={classes.divTest}>
            <p>a</p>
        </div>
        </div>
    )
}

export default Home;