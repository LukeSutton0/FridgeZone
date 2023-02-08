import React, { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import classes from "./HealthAndSafety.module.css"


const CreateHealthForm = () => {
  
  const {user} = useAuthContext()
  const [storeNumber, setStoreNumber] = useState('')

  const [message, setMessage] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const dataToSend = {storeNumber}
    const response = await fetch('http://localhost:4000/healthAndSafety', {
      method: 'POST',
      body: JSON.stringify(dataToSend),
      headers: {
        'Content-Type': 'application/json',
        'Authorisation':`Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (!response.ok) {
        setError("Ensure correct store number entered")
      }
      if (response.ok) {
        setMessage(` Report Generated Successfully`)
        setError(null)
        //console.log('New stock added:', json)
      }

  }

  return (
    <form onSubmit={handleSubmit}> 
        <input
        type="text"
        placeholder="Store Number"  
        onChange={(e) => setStoreNumber(e.target.value)} 
        value={storeNumber}
      />
      <button type="submit" className={classes.addStockButton}>Generate Report</button>
    </form>
  )
}

export default CreateHealthForm