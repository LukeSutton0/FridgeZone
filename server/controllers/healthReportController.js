const HealthReport = require('../models/healthReportModel.js')
const StockItem = require('../models/stockItemModel.js')
const mongoose = require('mongoose')


//Use post with storecode to find reports for correct store

const getHealthReports = async(req,res)=>{

}

// const viewStockItems = async(req,res)=>{  
//     const {storecode} = req.body
//     const storecodeToFind = storecode;
//     console.log(storecodeToFind)
//     const stockItems = await StockItem.find({"storecode":storecodeToFind}).sort({expiryDate:+1})
//     res.status(200).json(stockItems)
// }

//create report
const createHealthReport = async(req,res)=>{
    const{username,storecode} = req.body
    const dateOfReport = new Date().toISOString().split('T')[0];
    const reporter = username
    let quantityExpired = 0;
    const itemsExpired = [];
    console.log(storecode)
    try{
        const stockItems = await StockItem.find({"storecode":storecode}).sort({expiryDate:+1})
        for(let i=0; i<stockItems.length;i++){
            if(stockItems[i].expiryDate < dateOfReport){
                //expired
                quantityExpired += stockItems[i].quantity
                itemsExpired.push({name:stockItems[i].name , quantity:stockItems[i].quantity})
            }
        }
        console.log({reporter,dateOfReport,itemsExpired,quantityExpired,storecode})
        const healthReport = await HealthReport.create({reporter,dateOfReport,itemsExpired,quantityExpired,storecode})
        res.status(200).json(healthReport)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}

module.exports = {
    getHealthReports,
    createHealthReport,
}