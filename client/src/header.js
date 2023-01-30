import React from "react";
import logo from "./logo.png";
const MainHeader = () =>{
    let companyName = 'FridgeZone';

    return(
        <div class="nav">
            <div class="logoWrapper">
                <img src={logo}/>
            </div>
            <h3 id="headerTitle">{companyName}</h3>
        </div>
    )
}

export default MainHeader;