var express = require('express');
var route = express.Router();
var activiteCtrl = require('../controllers/activiteController')

const auth_middleware= require('../middleware/auth_middleware');


route.get('/', function(req, res){
  res.render('addActivites', {layout : 'index_layout'})
});

route.post('/', activiteCtrl.addActivites);

module.exports = route;
