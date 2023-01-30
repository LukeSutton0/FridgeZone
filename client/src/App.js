import React from 'react';
import './App.css';

//module components
//{MainHeader}
import MainHeader from './components/header/MainHeader.js'
import SignUp from './components/signUp/SignUp.js'
import MainFooter from './components/footer/Footer.js'
function App() {
  return (
    <div className="App">
      <MainHeader/>
      <SignUp/>
      <MainFooter/>
      
    </div>
  );
}

export default App;
