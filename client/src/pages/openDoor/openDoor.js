import React, { useState } from "react";
import classes from './openDoor.module.css'
import DoorForm from "./openDoorForm";

const Door = () => {  
  const [isOpen, setIsOpen] = useState(false);

  const toggleDoor = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={classes.doorContainer}>
      <h1>Delivery Door</h1>
      <button onClick={toggleDoor}>{isOpen ? 'Close' : 'Open'}</button>
      <br />
      <div className={`${classes.door} ${isOpen ? classes.open : classes.closed}`}></div>
      <br />
      { isOpen && <DoorForm /> }
    </div>
  )
}


export default Door;
