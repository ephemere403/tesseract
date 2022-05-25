const express = require('express')
const controller = require('../controllers/authControll')
const router = express.Router()
const tokenValid = require('../middleware/verifyToken')
const valid = require('express-validator')
const passport = require('passport')
const auth = require('../config/userConfig')


router.get('/', (req,res)=>{
    res.render('auth')
})

router.post('/login',controller.login)

router.post('/register',[valid.check('email',"email cannot be empty").notEmpty(),valid.check('password',"password should be longer than 7 characters").isLength({min:7})], controller.register)

router.get('/users',tokenValid.authCheck, controller.getUsers)


module.exports = router