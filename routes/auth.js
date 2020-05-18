

//*************************ROUTEUR POUR AUTHENTIFICATION***********************************

const express = require('express');
const router = express.Router();

const userCtrl= require('../controllers/userController');


router.route('/')
.get(userCtrl.login)
.post(userCtrl.login_post)

module.exports=router