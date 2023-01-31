import React from "react";
// import logo from "../../Assets/logo.PNG";
import classes from './MainHeader.module.css'
const MainHeader = () =>{
    let companyName = 'FridgeZone';

    return(
        <div className={classes.nav}>
            <div className={classes.logoWrapper}>
                {/* <img src={logo.PNG}/> */}
            </div>
            <h3 className={classes.headerTitle}>{companyName}</h3>
        </div>
    )
}

export default MainHeader;