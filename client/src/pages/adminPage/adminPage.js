import React from "react";
import classes from './adminPage.module.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

//add comments so we know whats going on with your initials
const AddUser = () =>{
  let navigate = useNavigate();
    return(
        <div className={classes.inputBox}>
          <Button variant="primary" onClick={()=> {
            navigate("/adduser");
            }}>
            AddUser</Button>
          <Button variant="primary" onClick={()=> {
            navigate("/RemoveUser");
            }}>
            RemoveUser</Button>
            <Button variant="primary" onClick={()=> {
            navigate("/EditUser");
            }}>
            EditUser</Button>
        </div>
    )
}

export default AddUser;