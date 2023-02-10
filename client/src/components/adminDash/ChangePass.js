import React, { useEffect, useState,Fragment } from "react";
//import StockDetails from "./StockViewDetails";
import classes from './AdminDash.module.css'
import { useAuthContext } from "../../hooks/useAuthContext";



const ChangePass = () => { 

    const {user} = useAuthContext()

    return(
        <Fragment>
            <p>Pass</p>
        </Fragment>
        
    )
}


export default ChangePass;