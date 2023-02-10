import React, { useEffect, useState,Fragment } from "react";
import classes from './AdminDash.module.css'
import { useAuthContext } from "../../hooks/useAuthContext";



const ChangeRole = () => { 

    const {user} = useAuthContext()

    return(
        <Fragment>
            <p>Role</p>
        </Fragment>
        
    )
}


export default ChangeRole;