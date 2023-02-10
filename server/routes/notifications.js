const express = require('express')

const {
    createNotification,
    getNotifications
} = require('../controllers/notificationsController.js')

const requireAuth = require('../middleware/requireAuth.js')

const router = express.Router()
router.use(requireAuth)


//POST createReport
router.post('/create',createNotification)

//POST get Notifications
router.post('/get',getNotifications)

module.exports = router







