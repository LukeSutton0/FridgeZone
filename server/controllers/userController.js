const User = require('../models/userModel.js')

//login
const loginUser = async(req,res)=>{
    res.json({mssg:'Login user'})
}

//signUp

const signUpUser = async(req,res)=>{
    const{username,password,jobtype,fullname} = req.body
    try{
        const user = await User.signUp(username,password,jobtype,fullname)
        res.status(200).json({username,user})
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}

module.exports = {
    loginUser,
    signUpUser
}

