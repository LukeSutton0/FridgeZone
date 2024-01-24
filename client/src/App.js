import React from 'react';
import {Link, Navigate, BrowserRouter as Router,Routes,Route} from 'react-router-dom';
//module components
import MainHeader from './components/header/MainHeader.js'
import MainFooter from './components/footer/Footer.js'
import ErrorContent  from './components/error/ErrorContent.js'
//Hooks
import requireAuth from './hooks/checkForAuth.js'
import {useAuthContext} from './hooks/useAuthContext.js';
//Pages
import MainScreen from './pages/mainScreen/MainScreen.js'
import SignUp from './pages/signUp/SignUp.js'
import Login from './pages/login/Login.js'
import Home from './pages/home/Home.js'
import Confirmation from './pages/confirmation/Confirmation.js'


function App() {
  const {user} = useAuthContext();

  return (
    <Router>
      <div className="App">
        <MainHeader/>
        <div className="content">
          <Routes>
            <Route path="/" element={user ? <Home /> : <MainScreen/>}>
            </Route>
            <Route path="*" element={<ErrorContent/>}>
            </Route>
            <Route path="/signup" element={<SignUp/>}>
            </Route>
            <Route path="/login" element={<Login/>}>
            </Route>
            <Route path="/confirmation" element={<Confirmation/>}>
            </Route>
            <Route path="/home" element={user ? <Home/> : <Navigate to="/login" />}>
            </Route>
          </Routes>
        </div>
        <MainFooter/>
      </div>
    </Router>
  );
}

export default App;
