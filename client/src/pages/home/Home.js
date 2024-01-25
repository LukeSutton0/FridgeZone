import React, {useEffect, useState } from "react";
import classes from './Home.module.css'
import { useAuthContext } from "../../hooks/useAuthContext";
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-scroll'
import Button from 'react-bootstrap/Button';
import AddUsers from "../../components/addUsers/AddUsers.js"
import OpenDoor from "../../components/openDoor/OpenDoor.js"
import StockView from "../../components/stockView/StockView.js"
import AddStock from "../../components/addStock/AddStock.js"
import RemoveStock from "../../components/removeStock/RemoveStock.js"
import HealthAndSafety from "../../components/healthSafetyReport/HealthAndSafety";
import AdminDashboard from "../../components/adminDash/AdminDash.js"
import Notifications from "../../components/notifications/Notifications.js"

const Home = () => {  
    const {user} = useAuthContext()
    const navigate = useNavigate()
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
      const intervalId = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
      }, 1000);
      return () => {
        clearInterval(intervalId);
      };
    }, []);
    const [date, setDate] = useState(new Date().toLocaleDateString());
    useEffect(() => {
      const intervalId = setInterval(() => {
        setDate(new Date().toLocaleDateString());
      }, 1000);
      return () => {
        clearInterval(intervalId);
      };
    }, []);

    return (
        <div className={classes.inputBox}>
            {user && (
                    <div className={classes.homeLayoutDiv}>
                        <div className={classes.homeFunctionDivBox}>
                            {(user.jobtitle === "HeadChef") && (
                                    <div className={classes.homeDivBox} id="Notifications">
                                        <Notifications/>
                                    </div>
                            )}
                            {(user.jobtitle === "HeadChef") && (
                                <div className={classes.homeDivBox} id="AddUsers">
                                    <AddUsers/>
                                </div>
                            )}
                            {(user.jobtitle === "HeadChef" || user.jobtitle === "DeliveryDriver") && (
                                <div className={classes.homeDivBox} id="OpenDoor">
                                    <OpenDoor/>
                                </div>
                            )}
                            {(user.jobtitle === "HeadChef" || user.jobtitle === "Chef") && (
                                <div className={classes.homeDivBox} id="StockView">
                                    <StockView/>
                                </div>
                            )}
                            {(user.jobtitle === "HeadChef" || user.jobtitle === "DeliveryDriver") && (
                                <div className={classes.homeDivBox} id="AddStock">
                                    <AddStock/>
                                </div>
                            )}
                            {(user.jobtitle === "HeadChef" || user.jobtitle === "Chef") && (
                                <div className={classes.homeDivBox} id="RemoveStock">
                                    <RemoveStock/>
                                </div>
                            )}
                            {(user.jobtitle === "HeadChef" || user.jobtitle === "HealthAndSafetyOfficer") && (
                                <div className={classes.homeDivBox} id="HealthAndSafety">
                                    <HealthAndSafety/>
                                </div>
                            )}
                            {(user.jobtitle === "HeadChef") && (
                                <div className={classes.homeDivBox} id="AdminDash">
                                    <AdminDashboard/>
                                </div>
                            )}
                             {(user.jobtitle === "" || user.jobtitle === "") && (
                                <div className={classes.homeDivBox}>
                                    
                                </div>
                            )}
                        </div>
                        <div className={classes.homeSideBar}>
                            <p>User:{" " + user.username}</p>
                            <p>JobTitle:{" " + user.jobtitle}</p>
                            <p>StoreCode:{" " + user.storecode}</p>
                            <p>{time}</p>
                            <p>{date}</p>
                            <p>Options Available:</p>
                            <ul className={classes.sideBarUnList}>
                            {(user.jobtitle === "HeadChef") && (
                                <Link to="Notifications" spy={true} offset={-200}><li className={classes.link}>Notifications</li></Link>
                            )}
                            {(user.jobtitle === "HeadChef") && (
                                <Link to="AddUsers" spy={true} offset={-200}><li className={classes.link}>Add Users</li></Link>
                            )}
                            {(user.jobtitle === "HeadChef" || user.jobtitle === "DeliveryDriver") && (
                                <Link to="OpenDoor" spy={true} offset={-200}><li className={classes.link}>Open Door</li></Link>
                            )}
                            {(user.jobtitle === "HeadChef" || user.jobtitle === "Chef") && (
                                <Link to="StockView" spy={true} offset={-200}><li className={classes.link}>View Stock</li></Link>
                            )}
                            {(user.jobtitle === "HeadChef" || user.jobtitle === "DeliveryDriver") && (
                               <Link to="AddStock" spy={true} offset={-200}><li className={classes.link}>Add Stock</li></Link>
                            )}
                            {(user.jobtitle === "HeadChef" || user.jobtitle === "Chef") && (
                                <Link to="RemoveStock" spy={true} offset={-200}><li className={classes.link}>Remove Stock</li></Link>
                            )}
                            {(user.jobtitle === "HeadChef" || user.jobtitle === "HealthAndSafetyOfficer") && (
                                <Link to="HealthAndSafety" spy={true} offset={-200}><li className={`${classes.link} ${classes.linkHealth}`}>Health And Safety Report</li></Link>
                            )}
                            {(user.jobtitle === "HeadChef") && (
                                <Link to="AdminDash" spy={true} offset={-200}><li className={`${classes.link} ${classes.linkAdmin}`}>Admin Dash</li></Link>
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