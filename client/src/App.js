import React from 'react';
import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom';
//module components
import MainHeader from './components/header/MainHeader.js'
import MainFooter from './components/footer/Footer.js'
import ErrorContent  from './components/error/ErrorContent.js'
//Hooks
import requireAuth from './hooks/checkForAuth.js'
import { useAuthContext } from './hooks/useAuthContext.js';
//Pages
import MainScreen from './pages/mainScreen/MainScreen.js'
import SignUp from './pages/signUp/SignUp.js'
import Login from './pages/login/Login.js'
import Home from './pages/home/Home.js'
import OpenDoor from './pages/openDoor/OpenDoor.js'
import StockView from './pages/stockView/StockView.js'


function App() {
  return (
    <Router>
      <div className="App">
        <MainHeader/>
        <div className="content">
          <Routes>
            <Route path="/" element={<MainScreen/>} onEnter={requireAuth}>
            </Route>
            <Route path="*" element={<ErrorContent/>}>
            </Route>
            <Route path="/signup" element={<SignUp/>}>
            </Route>
            <Route path="/login" element={<Login/>}>
            </Route>

            <Route path="/home" element={<Home/>} onEnter={useAuthContext}>
              <Route path="">
                <Route path="/home/openDoor" element={<OpenDoor/>} onEnter={requireAuth}>
                </Route>
                <Route path="/home/stockView" element={<StockView/>}>
                </Route>
              </Route>

            </Route>
          </Routes>
        </div>

        <MainFooter/>
      </div>
    </Router>
  );
}

export default App;
