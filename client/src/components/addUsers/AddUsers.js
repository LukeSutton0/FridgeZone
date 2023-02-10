import React, { Fragment, useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import classes from './AddUsers.module.css'
import AddUserDetails from "./AddUserDetails";
import { result } from "lodash";
const AddUsers = () => {  
    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(null)
    const {user} = useAuthContext()
    const [resultArray,setResultArray] = useState('')
    const storecode = user.storecode

    useEffect(() => {
        const acceptUser = async() => {
            try{
                //http://localhost:4000/user/signup
                const response = await fetch('http://localhost:4000/tempUser/view',{
                    method: "POST",
                    headers:{'Accept':'application/json','Content-Type': 'application/json','Authorisation':`Bearer ${user.token}`},
                    body: JSON.stringify({storecode})
                })
                const json = await response.json()
                if (response.ok) {
                    setResultArray(json)
                    console.log(resultArray)
                  }
            }
            catch(error){
                console.log({error})
            }
        }
    const intervalId = setInterval(() => {
        if (user){
            acceptUser();
          }
      }, 600000);
      //600000
      
      if (user){
        acceptUser();
      }

      return () => {
        clearInterval(intervalId);
      };

    }, [user]);

    return (
        <Fragment>
            <h1>Add Users</h1>
            <div className={classes.resultArrayDiv}>
            <div className={classes.resultArrayIndividual}>
                <div>
                    <p>Username:</p>
                </div>
                <div>
                    <p>Job Title:</p>
                </div>
                <div>
                    <p>Full Name:</p>
                </div>
                <div className="stockIdDiv">
                    <p>ID:</p>
                </div>
                <div>
                    <p>Option:</p>
                </div>
            </div>
            { resultArray && resultArray.map((resultArray) => (
                console.log(resultArray),
            //   <StockDetails key={stock._id} stock={stock} />
                <AddUserDetails key={resultArray._id} resultArray={resultArray}/>
            ))}
            </div>
        </Fragment>
  )
}


export default AddUsers;
