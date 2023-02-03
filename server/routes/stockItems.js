const express = require('express')

const {
    getStockItems,
    getStockItem,
    createStockItem,
    deleteStockItem,
    updateStockItem
} = require('../controllers/stockItemController.js')
const requireAuth = require('../middleware/requireAuth.js')


const router = express.Router()
router.use(requireAuth)

// GET all stockItems
router.get('/',getStockItems)

// Get 1 stock item
router.get('/',getStockItem)



//POST stockItem
router.post('/',createStockItem)

//DELETE stockItem 
router.delete('/:id', deleteStockItem)

//UPDATE stockItem
router.patch('/:id',updateStockItem)

module.exports = router