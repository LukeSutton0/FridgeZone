const express = require('express')
const {signUpTempUser,getTempUsers} = require('../controllers/tempUserController')
const router = express.Router()



//signup route
router.post('/signup',signUpTempUser)

router.post('/view',getTempUsers)
module.exports = router