const express = require('express')

const {
    createNotification,
    getNotifications,
    deleteNotification
} = require('../controllers/notificationsController.js')

const requireAuth = require('../middleware/requireAuth.js')

const router = express.Router()


//POST createReport
router.post('/create',createNotification)

//POST get Notifications
router.post('/get',getNotifications)

router.post('/delete',deleteNotification)

module.exports = router







