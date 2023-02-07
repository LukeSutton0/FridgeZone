import React, { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import classes from "./HealthAndSafety.module.css"


const CreateHealthForm = () => {
  
  const {user} = useAuthContext()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch('http://localhost:4000/stock', {
      method: 'POST',
      body: JSON.stringify(),
      headers: {
        'Content-Type': 'application/json',
        'Authorisation':`Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (!response.ok) {
      //setError("Ensure all fields are filled")
    }
    if (response.ok) {
      //console.log('New stock added:', json)
    }

  }

  return (
    <form onSubmit={handleSubmit}> 
      <button type="submit" className={classes.addStockButton}>Generate Report</button>
    </form>
  )
}

export default CreateHealthForm