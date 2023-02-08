const HealthReport = require('../models/healthReportModel.js')
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
    const date = new Date().toISOString().split('T')[0];
    
    console.log(username,storecode,date)
    try{
        
        const healthReport = await HealthReport.create({storecode})
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}
// const createStockItem = async (req,res) =>{
//     const{name,quantity,expiryDate,supplier,storecode}=req.body

//     //add doc to db
//     try{
//         const stockItem = await StockItem.create({name,quantity,expiryDate,supplier,storecode})
//         res.status(200).json(stockItem)
//     }
//     catch(error){
//         res.status(400).json({error:error.message})
//     }
// }

module.exports = {
    getHealthReports,
    createHealthReport,
}