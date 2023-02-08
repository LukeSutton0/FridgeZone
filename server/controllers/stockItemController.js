const StockItem = require('../models/stockItemModel.js')
const mongoose = require('mongoose')

//get all stock

const getStockItems = async(req,res)=>{
    const stockItems = await StockItem.find({}).sort({expiryDate:-1})
    res.status(200).json(stockItems)
}

//Use post with storecode to find items for correct store
const viewStockItems = async(req,res)=>{  
    const {storecode} = req.body
    const storecodeToFind = storecode;
    const stockItems = await StockItem.find({storecodeToFind}).sort({expiryDate:-1})
    res.status(200).json(stockItems)
}

//get single stock item
const getStockItem = async(req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such item"})
    }
    const stockItem = await StockItem.findById(id)

    if(!stockItem){
        return res.status(404).json({error:`No Item Found by Id ${id}`})
    }
    res.status(200).json(stockItem)
}


//create new stock item
const createStockItem = async (req,res) =>{
    const{name,quantity,expiryDate,supplier,storecode}=req.body

    //add doc to db
    try{
        const stockItem = await StockItem.create({name,quantity,expiryDate,supplier,storecode})
        res.status(200).json(stockItem)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}


// delete a stock item

const  deleteStockItem  = async(req,res) =>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such item"})
    }

    const stockItem = await StockItem.findOneAndDelete({_id:id})

    if(!stockItem){
        return res.status(404).json({error:`No Item Found by Id ${id}`})
    }

    res.status(200).json(stockItem)

}
//update a stock item

const updateStockItem = async(req,res) =>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such item"})
    }

    const stockItem = await StockItem.findOneAndUpdate({_id: id},{
        ...req.body
    })
    if(!stockItem){
        return res.status(404).json({error:`No Item Found by Id ${id}`})
    }
    res.status(200).json(stockItem)
}

module.exports = {
    getStockItems,
    getStockItem,
    createStockItem,
    deleteStockItem,
    updateStockItem,
    viewStockItems

}