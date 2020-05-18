
//*****************ROUTEUR POUR INSCRIPTION***************************************

const express = require('express');
const router = express.Router();

const userCtrl= require('../controllers/userController');

router.get('/', userCtrl.signup);
router.post('/',userCtrl.signup_post);


//router.post('/login', userCtrl.login);
/*
router.route('/')
.get(userCtrl.signup)
.post(userCtrl.signup_post)
*/
/*
router.route('/')
.get(userCtrl.signup)
.post(userCtrl.signup_post)
*/
module.exports=router