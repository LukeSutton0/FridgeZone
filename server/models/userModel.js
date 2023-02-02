const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

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
    jobtype:{
        type:String,
        require:true

    },
    fullname:{
        type:String,
        require:true
    }
})

//static signup method

userSchema.statics.signUp = async function(username,password,jobtype,fullname) {
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
        jobtype,
        fullname
    })
    return user
}

module.exports = mongoose.model('User',userSchema)