import React from "react";
import classes from './Home.module.css'
import { useAuthContext } from "../../hooks/useAuthContext";
import {useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';

import OpenDoor from "../../components/openDoor/OpenDoor.js"
import StockView from "../../components/stockView/StockView.js"
import AddStock from "../../components/addStock/AddStock.js"
import RemoveStock from "../../components/removeStock/RemoveStock.js"
import HealthAndSafety from "../../components/healthSafetyReport/HealthAndSafety";

const Home = () => {  
    const {user} = useAuthContext()
    const navigate = useNavigate()
    return (
        <div className={classes.inputBox}>

            {user && (
              
                    <div className={classes.homeLayoutDiv}>
                        <div className={classes.homeFunctionDivBox}>
                            {(user.jobtitle == "HeadChef" || user.jobtitle == "DeliveryDriver") && (
                                <div className={classes.homeDivBox}>
                                <OpenDoor/>
                                </div>
                            )}
                            {(user.jobtitle == "HeadChef" || user.jobtitle == "Chef") && (
                                <div className={classes.homeDivBox}>
                                    <StockView/>
                                </div>
                            )}
                            {(user.jobtitle == "HeadChef" || user.jobtitle == "DeliveryDriver") && (
                                <div className={classes.homeDivBox}>
                                    <AddStock/>
                                </div>
                            )}
                            {(user.jobtitle == "HeadChef" || user.jobtitle == "Chef") && (
                                <div className={classes.homeDivBox}>
                                    <RemoveStock/>
                                </div>
                            )}
                            {(user.jobtitle == "HeadChef" || user.jobtitle == "HealthAndSafetyOfficer") && (
                                <div className={classes.homeDivBox}>
                                    <HealthAndSafety/>
                                </div>
                            )}
                             {(user.jobtitle == "" || user.jobtitle == "") && (
                                <div className={classes.homeDivBox}>
                                    
                                </div>
                            )}
                        </div>
                        <div className={classes.homeSideBar}>
                            <p>User:{user.username}</p>
                            <p>JobTitle:{user.jobtitle}</p>
                            <p>StoreCode:{user.storecode}</p>
                            <p>Options Available:</p>
                            <ul>
                            {(user.jobtitle == "HeadChef" || user.jobtitle == "DeliveryDriver") && (
                                <li><a>OpenDoor</a></li>
                            )}
                            {(user.jobtitle == "HeadChef" || user.jobtitle == "Chef") && (
                                <li><a>View Stock</a></li>
                            )}
                            {(user.jobtitle == "HeadChef" || user.jobtitle == "DeliveryDriver") && (
                               <li><a>Add Stock</a></li>
                            )}
                            {(user.jobtitle == "HeadChef" || user.jobtitle == "Chef") && (
                                <li><a>Remove Stock</a></li>
                            )}
                            {(user.jobtitle == "HeadChef" || user.jobtitle == "HealthAndSafetyOfficer") && (
                                <li><a>Health And Safety Report</a></li>
                            )}
                             {(user.jobtitle == "" || user.jobtitle == "") && (
                                <li><a></a></li>
                            )}
                            </ul>
                                
                        </div>
                    </div>
                                     
                
                
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