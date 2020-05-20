const express = require('express');
const router = express.Router();

indexCtrl=require('../controllers/indexController');

router.get('/', indexCtrl.index);

module.exports= router