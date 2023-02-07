import React, { Fragment, useState } from "react";
import classes from './HealthAndSafety.module.css'
import HealthAndSafetyForm from "./HealthAndSafetyForm.js";

const HealthAndSafety = () => {  
  return (
    <Fragment>
      <div className={classes.addStockContainer}>
        <h1>Generate Health And Safety Report</h1>
            <HealthAndSafetyForm/>
      </div>
    </Fragment>
  )
}


export default HealthAndSafety;
