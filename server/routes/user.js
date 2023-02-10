const express = require('express')
const { loginUser,signUpUser,viewUsers,changePass} = require('../controllers/userController')
const router = express.Router()

//login route
router.post('/login',loginUser)

//view users in store
router.post('/view',viewUsers)

router.patch('/changepassword',changePass)

//signup route
router.post('/signup',signUpUser)
router.get('/signup', async(req,res)=>{
})

module.exports = router