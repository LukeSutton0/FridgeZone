const mongoose = require('mongoose')

const Schema = mongoose.Schema //make new schema

const notificationSchema = new Schema({
    title:{
        type: String,
        required:true
    },
    description:{
        type: Number,
        required:true
    },
    storecode:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model('Notification',notificationSchema)
