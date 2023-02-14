const Notification = require('../models/notificationModel.js')
const mongoose = require('mongoose')


//Use post with storecode to find reports for correct store

const getNotifications = async(req,res)=>{
    const {storecode} = req.body

    try{
        const reportEntries = await Notification.find({"storecode":storecode}).sort({dateOfReport:+1})
        //console.log(reportEntries)
        res.status(200).json(reportEntries)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}

const createNotification = async(req,res)=>{
    const{title,description,storecode} = req.body
    console.log(title,description,storecode)
}

const deleteNotification = async(req,res)=>{
    const {notification_id,storecode} = req.body
    
    try{
        const notificationDelete = await Notification.findOneAndDelete({_id:notification_id})
        res.status(200).json(notificationDelete)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}

module.exports = {
    getNotifications,
    createNotification,
    deleteNotification
}