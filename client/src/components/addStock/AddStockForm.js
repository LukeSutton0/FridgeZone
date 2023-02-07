import React, { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

const DeliveryRecord = () => {
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [expirydate, setExpirydate] = useState('')
  const [supplier, setSupplier] = useState('')

  const [message, setMessage] = useState('')
  const [error, setError] = useState(null)
  
  const {user} = useAuthContext()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const stock = {name, quantity, expiryDate: expirydate, supplier}
    
    const response = await fetch('http://localhost:4000/stock', {
      method: 'POST',
      body: JSON.stringify(stock),
      headers: {
        'Content-Type': 'application/json',
        'Authorisation':`Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      setName('')
      setQuantity('')
      setExpirydate('')
      setSupplier('')
      //console.log('New stock added:', json)
      setMessage(json.message)
    }

  }

  return (
    <form onSubmit={handleSubmit}> 

      <input
        className="addStockInput" 
        type="text"
        placeholder="Item Name"  
        onChange={(e) => setName(e.target.value)} 
        value={name}
      />

    
      <input 
        className="addStockInput" 
        type="number" 
        placeholder="Quantity" 
        onChange={(e) => setQuantity(e.target.value)} 
        value={quantity}
      />

   
      <input 
        className="addStockInput" 
        type="date" 
        placeholder="Expiry Date"
        onChange={(e) => setExpirydate(e.target.value)} 
        value={expirydate} 
      />

      <input 
        className="addStockInput" 
        type="text" 
        placeholder="Supplier"
        onChange={(e) => setSupplier(e.target.value)} 
        value={supplier} 
      />

      <button type="submit" className="addStockButton">Add Item</button>
      {error && <div className="error">{error}</div>}
      {message && <div className="Stock Added">{message}</div>}
    </form>
  )
}

export default DeliveryRecord