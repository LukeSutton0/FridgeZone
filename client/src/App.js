import React from 'react';
import './App.css';

//module components
//{MainHeader}
import MainHeader from './header.js'
import SignUp from './signUp.js'

function App() {
  return (
    <div className="App">
      <MainHeader/>
      <SignUp/>
      
    </div>
  );
}

export default App;
