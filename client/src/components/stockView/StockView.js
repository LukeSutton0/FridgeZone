import React, { useEffect, useState,Fragment } from "react";
import StockDetails from "./StockViewDetails";
import classes from './StockView.module.css'
import { useAuthContext } from "../../hooks/useAuthContext";

const StockView = () => {  
  const [stock, setStock] = useState(null)
  const {user} = useAuthContext()

  useEffect(() => {
    const fetchstock = async () => {
      const response = await fetch('http://localhost:4000/stock',{
        headers:  {
          'Authorisation':`Bearer ${user.token}`
        }
      })
      const json = await response.json()
      if (response.ok) {
        setStock(json)

    }
  }
  //if user exists try to fetch stock
    if (user){
      fetchstock();
    }

  }, [user])
  

  return (
    <Fragment>
      <div className="stockhome">
        <div className="stocks">
          <h1>Stock Details</h1>
          <div>
            {stock && stock.map((stock) => (
              <StockDetails key={stock.id} stock={stock} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  )
}


export default StockView;
