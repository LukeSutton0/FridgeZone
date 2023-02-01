const express = require('express')

const router = express.Router()


// GET all
router.get('/',(req,res)=>{
    res.json({stockItem:'StockContent'})
})

// Testing  get
router.get('/test',(req,res)=>{
    res.json({json:'Test'})
})


//POST item
router.post('/',(req,res)=>{
    res.json({msg:'Post item'})
})

//DELETE item
router.delete('/:id',(req,res)=>{
    res.json({msg:'Delete item'})
})

//UPDATE item
router.patch('/:id',(req,res)=>{
    res.json({msg:'Update item'})
})

// copy for more
router.post('/',(req,res)=>{
    res.json({msg:'Post item'})
})


module.exports = router