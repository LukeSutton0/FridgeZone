import React, { Fragment, useState } from "react";
import classes from './OpenDoor.module.css'
import DoorForm from "./OpenDoorForm";

const Door = () => {  
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDoor = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Fragment>
      <div className={classes.doorContainer}>
        <h1 className="doorHeader">Delivery Door Status: {isOpen ? 'Open':'Closed'}</h1>
        <button onClick={toggleDoor}>{isOpen ? 'Close' : 'Open'}</button>
        <br />
        <div className={`${classes.door} ${isOpen ? classes.open : classes.closed}`}></div>
        <br />
        { isOpen && <DoorForm /> }
      </div>
    </Fragment>
  )
}


export default Door;
