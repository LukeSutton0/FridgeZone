const express = require('express')

const router = express.Router()


// GET all
router.get('/',(req,res)=>{
    res.json({someJson:'ContentJson'})
})

// Testing different get
router.get('/test',(req,res)=>{
    res.json({json:'Test'})
})


module.exports = router