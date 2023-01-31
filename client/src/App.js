import React from 'react';
import './App.css';

//module components
//{MainHeader}
import MainHeader from './components/header/MainHeader.js'
import MainFooter from './components/footer/Footer.js'
import MainScreen from './components/mainScreen/MainScreen.js'
import ErrorPage  from './components/error/ErrorPage.js'
import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom';

import SignUp from './components/signUp/SignUp.js'

function App() {
  return (
    <Router>
      <div className="App">
        <MainHeader/>

        <div className="content">
          <Routes>
            <Route path="/" element={<MainScreen/>}>
            </Route>
            <Route path="/signUp" element={<SignUp/>}>
            </Route>
            <Route path="*" element={<ErrorPage/>}>
            </Route>
          </Routes>
        </div>

        <MainFooter/>
      </div>
    </Router>
  );
}

export default App;
