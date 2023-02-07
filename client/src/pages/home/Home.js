import React from "react";
import classes from './Home.module.css'
import { useAuthContext } from "../../hooks/useAuthContext";
import {Link, useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';

import OpenDoor from "../../components/openDoor/OpenDoor.js"
import StockView from "../../components/stockView/StockView.js"
import AddStock from "../../components/addStock/AddStock.js"


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
                        <div className={classes.homeDivBox}>
                            <AddStock/>
                        </div>
                        <div className={classes.homeDivBox}>
                            
                        </div>
                        <div className={classes.homeDivBox}>
                            
                        </div>
                        <div className={classes.homeDivBox}>
                            
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