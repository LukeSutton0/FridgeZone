import React, { useEffect, useState,Fragment } from "react";
//import StockDetails from "./StockViewDetails";
import classes from './AdminDash.module.css'
import { useAuthContext } from "../../hooks/useAuthContext";
import ChangePass from "./ChangePass.js"
import ChangeRole from "./ChangeRole.js"
import RemoveUser from "./RemoveUser.js"



const AdminDash = () => { 


    const {user} = useAuthContext()
    const [sectionOpen,setSectionOpen] = useState(null)

    const handleClick = (param) =>{
        setSectionOpen(param)
        console.log(param)
    }


    return(
        <Fragment>
            <h1>Admin Dashboard</h1>

            <button onClick={() => handleClick('ChangePass')}>Change Pass</button>
            <button onClick={() => handleClick('ChangeRole')}>Change Role</button>
            <button onClick={() => handleClick('RemoveUser')}>Remove User</button>

            {sectionOpen === 'ChangePass' && <ChangePass />}
            {sectionOpen === 'ChangeRole' && <ChangeRole />}
            {sectionOpen === 'RemoveUser' && <RemoveUser />}
        </Fragment>
        
    )
}


export default AdminDash;