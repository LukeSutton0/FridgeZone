import React from "react";
import logo from "./logo.png";
import classes from './MainHeader.module.css'
const MainHeader = () =>{
    let companyName = 'FridgeZone';

    return(
        <div className={classes.nav}>
            <div className={classes.logoWrapper}>
                <img src={logo}/>
            </div>
            <h3 className={classes.headerTitle}>{companyName}</h3>
        </div>
    )
}

export default MainHeader;