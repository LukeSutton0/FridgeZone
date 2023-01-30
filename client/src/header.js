import React from "react";

const MainHeader = () =>{
    let companyName = 'FridgeZone';

    return(
        <div id="header">
        <img src={"./logo.jpeg"}/>
        <h3>{companyName}</h3>
      </div>
    )
}

export default MainHeader;