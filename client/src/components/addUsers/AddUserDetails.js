import classes from './AddUsers.module.css'
import { useAuthContext } from "../../hooks/useAuthContext";
import React, { useState } from "react";


const AddUserDetails = ({resultArray}) => {

    const {user} = useAuthContext()
    const storecode = user.storecode
    const [userChange, setUserChange] = useState('');
    const [message, setMessage] = useState('')
    const [error, setError] = useState(null)


    return (
        <div className={classes.resultArrayIndividual}>
            <div>
                <p>{resultArray.username}</p>
            </div>
            <div>
            <p>{resultArray.jobtitle}</p>
            </div>
            <div>
                <p>{resultArray.fullname}</p>
            </div>
            <div>
                <p>{resultArray.id}</p>
            </div>
            <div className={classes.resultArrayButtonDiv}>
                    <button>Add</button>
                    <button>Remove</button>
                </div>
        </div>
    )
}


export default AddUserDetails;