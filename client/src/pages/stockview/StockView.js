import React, { useEffect, useState } from "react";
import StockDetails from "./StockViewDetails";
import classes from './StockView.module.css'


const Details = () => {  
  const [stock, setStock] = useState(null)

  useEffect(() => {
    const fetchstock = async () => {
      const response = await fetch('http://localhost:4000/stock')
      const json = await response.json()

      if (response.ok) {
        setStock(json)

    }
  }
    fetchstock();

  }, [])
  

  return (
    <div className="stockhome">
      <div className="stocks">
      <h1>Stock Details</h1>
      {stock && stock.map((stock) => (
        <StockDetails key={stock.id} stock={stock} />
      ))}
      </div>
    </div>
  )
}


export default Details;
