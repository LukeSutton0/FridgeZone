import React from 'react';
import './App.css';

//module components
//{MainHeader}
import MainHeader from './components/header/MainHeader.js'
import MainFooter from './components/footer/Footer.js'
import MainScreen from './components/mainScreen/MainScreen.js'


import SignUp from './components/signUp/SignUp.js'

function App() {
  return (
    <div className="App">
      <MainHeader/>
      <MainScreen/>
      <MainFooter/>
    </div>
  );
}

export default App;
