import React, { useEffect, useState,Fragment } from "react";
import classes from './Notifications.module.css'
import { useAuthContext } from "../../hooks/useAuthContext";


const Notifications = () =>{
    const {user} = useAuthContext()
    const _id = user.id
    const storecode = user.storecode
    const[notification,setNotification]= useState('')

    useEffect(() => {
        const getNotifications = async () => {
          const response = await fetch('http://localhost:4000/notifications/get',{
            method: "POST",
            headers:{'Accept':'application/json','Content-Type': 'application/json','Authorisation':`Bearer ${user.token}`},
            body: JSON.stringify({storecode})
          })
          const json = await response.json()
          if (response.ok) {
            setNotification(json)
        }
      }
        //if user exists try to fetch stock
        if (user){
          getNotifications();
        }
    
    }, [user])

    const handleClick = () =>{
        if (user){
          const refreshNotifications = async () => {
            //console.log(JSON.stringify({storecode}))
            const response = await fetch('http://localhost:4000/notifications/get',{
              method: "POST",
              headers:{'Accept':'application/json','Content-Type': 'application/json','Authorisation':`Bearer ${user.token}`},
              body: JSON.stringify({storecode,})
            })
            const json = await response.json()
            if (response.ok) {
              setNotification(json)
            }
          }
          refreshNotifications();
        }
      }
return(
    <Fragment>
        <div className={classes.notificationDetails}>
          <div className={classes.notificationHeaderDiv}>
            <h1 className={classes.notificationHead}>Notifications</h1>
            <button className={classes.notificationRefresh} onClick={handleClick}>Refresh</button>
          </div>
          <div className={classes.notificationDiv}>
            <div className={classes.notificationIndividual}>
                <div>
                    <p>Title:</p>
                </div>
                <div>
                    <p>Description:</p>
                </div>
                <div>
                    <p>Clear?:</p>
                </div>
            </div>
            {/* {notification && notification.map((notification) => (
              <NotificationDetails key={notification._id} notification={notification} />
            ))} */}
          </div>
        </div>
    </Fragment>
)
}

export default Notifications