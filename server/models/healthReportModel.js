const mongoose = require('mongoose')
const Schema = mongoose.Schema //make new schema

const healthReportSchema = new Schema({
    reporter:{
        type:String,
        required:true
    },
    dateOfReport:{
        type:String,
        required:true
    },
    itemsOutOfDate:{
        type:String,
        required:true
    },
    quantityOutOfDate:{
        type:String,
        required:true
    }
},{timestamps:true})
module.exports = mongoose.model('HealthReport',healthReportSchema)
