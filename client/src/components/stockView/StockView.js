import React, { useEffect, useState,Fragment } from "react";
import StockDetails from "./StockViewDetails";
import classes from './StockView.module.css'
import { useAuthContext } from "../../hooks/useAuthContext";

const StockView = () => {  
  const [stock, setStock] = useState(null)
  const {user} = useAuthContext()
  const storecode = user.storecode
  useEffect(() => {
    const fetchstock = async () => {
      //console.log(JSON.stringify({storecode}))
      const response = await fetch('http://localhost:4000/stock/view',{
        method: "POST",
        headers:{'Accept':'application/json','Content-Type': 'application/json','Authorisation':`Bearer ${user.token}`},
        body: JSON.stringify({storecode})
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
        <div className={classes.stockDetails}>
          <h1>Current Stock</h1>
          <div className={classes.stockViewDiv}>
          <div className={classes.stockViewIndividual}>
            <div>
                <p>Name:</p>
            </div>
            <div>
            <p>Quantity:</p>
            </div>
            <div>
                <p>Expiry Date:</p>
            </div>
            <div>
                <p>Supplier:</p>
            </div>
            <div>
                <p>ID:</p>
            </div>
        </div>
            {stock && stock.map((stock) => (
              <StockDetails key={stock.id} stock={stock} />
            ))}
          </div>
        </div>
    </Fragment>
  )
}


export default StockView;
