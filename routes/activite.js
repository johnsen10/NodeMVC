var express = require('express');
var route = express.Router();
var activiteCtrl = require('../controllers/activiteController')

route.get('/addActivites', function(req, res){
  res.render('addActivites')
});

route.post('/addActivites', activiteCtrl.addActivites);

module.exports = route;
