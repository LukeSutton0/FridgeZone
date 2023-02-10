import React, { useEffect, useState,Fragment } from "react";
//import StockDetails from "./StockViewDetails";
import classes from './AdminDash.module.css'
import { useAuthContext } from "../../hooks/useAuthContext";



const RemoveUser= () => { 

    const {user} = useAuthContext()

    return(
        <Fragment>
            <p>Remove</p>
        </Fragment>
        
    )
}


export default RemoveUser;