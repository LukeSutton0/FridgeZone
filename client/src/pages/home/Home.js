import React from "react";
import classes from './Home.module.css'
import { useAuthContext } from "../../hooks/useAuthContext";
import {Link, useNavigate} from 'react-router-dom'
import OpenDoor from "../openDoor/OpenDoor.js"
import StockView from "../stockView/StockView.js"
import Button from 'react-bootstrap/Button';

const Home = () => {  
    const {user} = useAuthContext()
    const navigate = useNavigate()
    return (
        <div className={classes.inputBox}>

            {user && (
                <>
                <div className={classes.homeLayoutDiv}>
                    <div className={classes.homeFunctionDivBox}>
                        <div className={classes.homeDivBox}>
                            <OpenDoor/>
                        </div>
                        <div className={classes.homeDivBox}>
                            <StockView/>
                        </div>
                    </div>
                    <div className={classes.homeSideBar}>
                        <p>User:{user.username}</p>
                        <p>Options Available:</p>
                        <ul>
                            <li>Option1</li>
                            <li>Option2</li>
                        </ul>
                            
                    </div>
                </div>

                </>
                
            )}
            {!user &&(
                <div className={classes.homeLoginButton}>
                    <Button variant="primary" onClick={()=> {
                    navigate('/login');
                    }}>
                    Please Login To View This Page</Button>
                </div>
            )}
            
        </div>
    )
}

export default Home;