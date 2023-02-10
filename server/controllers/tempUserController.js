const TempUser = require('../models/tempUserModel.js')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id:_id},process.env.SECRET,{expiresIn:'2d'})
}

//signUp

const signUpTempUser = async(req,res)=>{
    const{username,password,jobtitle,fullname,storecode} = req.body
    try{
        const tempUser = await TempUser.signUp(username,password,jobtitle,fullname,storecode)
        //create token
        const token = createToken(tempUser._id)
        res.status(200).json({username,token,jobtitle,storecode})
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}


//view temp users

const getTempUsers = async(req,res)=>{
    const{storecode} = req.body
    try{
        const tempUserArray = await TempUser.find({"storecode":storecode}).sort({expiryDate:+1})
        console.log(tempUserArray)
        const resultArray = []
        for(let i=0; i<tempUserArray.length;i++){
            //here
            const tempUser = tempUserArray[i];
            resultArray.push({
                id: tempUser._id,
                username: tempUser.username,
                jobtitle: tempUser.jobtitle,
                fullname: tempUser.fullname
             });
        }
        res.status(200).json(resultArray)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
                // obj[i].push({id:tempUser._id, username:tempUser.username,jobtitle:tempUser.jobtitle,fullname:tempUser.fullname})

}

module.exports = {
    signUpTempUser,
    getTempUsers
}

