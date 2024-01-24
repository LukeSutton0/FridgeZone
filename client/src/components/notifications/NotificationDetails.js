import { useAuthContext } from '../../hooks/useAuthContext'
import React, {useState,Fragment } from "react";
import classes from './Notifications.module.css'

const NotificationDetails = ({notification}) => {
    const {user} = useAuthContext()
    const storecode = user.storecode
    const notification_id = notification._id
    const [message, setMessage] = useState('')
    const [error, setError] = useState(null)
    const handleSubmit = async (e) =>{
        e.preventDefault()
        const response = await fetch('http://localhost:4000/notifications/delete', {
        method: 'POST',
        body: JSON.stringify({notification_id,storecode}),
        headers: {
            'Content-Type': 'application/json',
            'Authorisation':`Bearer ${user.token}`
            }
        })
        //const json = await response.json()
        if (!response.ok) {
            setMessage('')
            setError("Server Error Connection")
        }
        if (response.ok) {
        setMessage(` Removed Successfully`)
        setError(null)
        }
    }
    
    
    
    
    return (
        <Fragment>
            <div className={classes.notificationIndividual}>
                <div>
                    <p>{notification.title}</p>
                </div>
                <div>
                    <p>{notification.description}</p>
                </div>
                <div>
                    <button className={classes.RemoveNotificationButton} onClick={handleSubmit} >Clear</button>
                </div>
            </div>
        </Fragment>
    )
}


export default NotificationDetails;