import React from 'react';
import './App.css';


function App() {
  const companyName = 'FridgeZone';
  return (
    <div className="App">
      <div id="header">
        <img src={"./logo.jpeg"}/>
        <h3>{companyName}</h3>
      </div>
      <div id="inputBox">
          <h1>Input</h1>
          <p>para</p>
      </div>
      
    </div>
  );
}

export default App;
