import React from 'react';

//module components
//{MainHeader}
import MainHeader from './components/header/MainHeader.js'
import MainFooter from './components/footer/Footer.js'
import MainScreen from './pages/mainScreen/MainScreen.js'
import ErrorContent  from './components/error/ErrorContent.js'
import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom';

import SignUp from './pages/signUp/SignUp.js'

import Login from './pages/login/Login.js'

function App() {
  return (
    <Router>
      <div className="App">
        <MainHeader/>
        <div className="content">
          <Routes>
            <Route path="/" element={<MainScreen/>}>
            </Route>
            <Route path="*" element={<ErrorContent/>}>
            </Route>
            <Route path="/signUp" element={<SignUp/>}>
            </Route>
            <Route path="/login" element={<Login/>}>
            </Route>
          </Routes>
        </div>

        <MainFooter/>
      </div>
    </Router>
  );
}

export default App;
