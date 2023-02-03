import { useState } from "react";
import {useAuthContext} from './useAuthContext.js'

export const useSignUp = () =>{
    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const signup = async(username,password,jobtitle,fullname) => {
        setIsLoading(true)
        setError(null)

        try{
            const response = await fetch('http://localhost:4000/user/signup',{
                method: "POST",
                headers:{'Accept':'application/json','Content-Type': 'application/json'},
                body: JSON.stringify({username,password,jobtitle,fullname})
            })
            const json = await response.json()
    
            if(!response.ok){
                setIsLoading (false)
                setError(json.error)
            }
            if(response.ok){
                localStorage.setItem('user',JSON.stringify(json))
                dispatch({type: 'LOGIN', payload:json})
                setIsLoading(false)
            }
        }
        catch(error){
            console.log({error})
        }
        
    }
    return {signup,isLoading,error}
}
