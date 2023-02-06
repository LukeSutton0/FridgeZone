import React, { useEffect, useState } from "react";
import StockDetails from "./StockViewDetails";
import classes from './StockView.module.css'

const Details = () => {
  const [stock, setStock] = useState(null);
  const [originalStock, setOriginalStock] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchStock = async () => {
      const response = await fetch("http://localhost:4000/stock");
      const json = await response.json();

      if (response.ok) {
        setStock(json);
        setOriginalStock(json);
      }
    };

    fetchStock();
  }, []);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    setStock(
      originalStock.filter((item) => {
        return (
          item._id === searchTerm ||
          item.quantity == searchTerm ||
          item.expiryDate === searchTerm ||
          item.supplier === searchTerm
        );
      })
    );
  };

  const handleReset = () => {
    setStock(originalStock);
  };

  return (
    <div className="stockhome">
      <div className="stocks">
        <h1>Stock Details</h1>
        <div className="search-container">
          <input type="text" value={searchTerm} onChange={handleChange} />
          <button onClick={handleSearch}>Search</button>
          <button onClick={handleReset}>Reset</button>
        </div>
        {stock && stock.length > 0 ? (
          stock.map((stock) => (
            <StockDetails key={stock.id} stock={stock} />
          ))
        ) : (
          <p>No matching items found</p>
        )}
      </div>
    </div>
  );
};

export default Details;
