const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema
const validator = require('validator')
const userSchema = new Schema({
    username:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    jobtitle:{
        type:String,
        require:true

    },
    fullname:{
        type:String,
        require:true
    }
})

//static signup method

userSchema.statics.signUp = async function(username,password,jobtitle,fullname) {
    //validation
    if(!username || !password || !jobtitle || !fullname){
        throw Error ('All fields must be filled')
    }
    if (!validator.isStrongPassword(password,{minLength:4})){
        
        throw Error ('Password not strong enough')
    }
//Check if a password is strong or not. Allows for custom requirements or scoring rules. 
//If returnScore is true, then the function returns an integer score for the password rather than a boolean.
// Default options:
// { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1, 
//returnScore: false, pointsPerUnique: 1, pointsPerRepeat: 0.5, pointsForContainingLower: 10,
// pointsForContainingUpper: 10, pointsForContainingNumber: 10, pointsForContainingSymbol: 10 }
    const exists =  await this.findOne({username})
    if (exists){
        throw Error("Username already in use")
    }
    //password hash
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)

    const user = await this.create({
        username,
        password:hash,
        jobtitle,
        fullname
    })
    return user
}

userSchema.statics.login = async function(username,password){
    if(!username || !password){
        throw Error ('Enter email and password')
    }
    const user =  await this.findOne({username})
    if (!user){
        throw Error("Username not found")
    }
    const match = await bcrypt.compare(password,user.password)

    if(!match){
        throw Error("Incorrect Password")
    }
    return user
}



module.exports = mongoose.model('User',userSchema)