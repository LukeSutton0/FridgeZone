import React from 'react';
import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom';
//module components
//{MainHeader}
import MainHeader from './components/header/MainHeader.js'
import MainFooter from './components/footer/Footer.js'
import MainScreen from './pages/mainScreen/MainScreen.js'
import ErrorContent  from './components/error/ErrorContent.js'
import checkForAuth from './hooks/checkForAuth.js'

import SignUp from './pages/signUp/SignUp.js'
import Login from './pages/login/Login.js'
import Home from './pages/home/Home.js'

function App() {
  return (
    <Router>
      <div className="App">
        <MainHeader/>
        <div className="content">
          <Routes>
            <Route path="/" element={<MainScreen/>} onEnter={checkForAuth}>
            </Route>
            <Route path="*" element={<ErrorContent/>}>
            </Route>
            <Route path="/signup" element={<SignUp/>}>
            </Route>
            <Route path="/login" element={<Login/>}>
            </Route>
            <Route path="/home" element={<Home/>}>
            </Route>
          </Routes>
        </div>

        <MainFooter/>
      </div>
    </Router>
  );
}

export default App;
