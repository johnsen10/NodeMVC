var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser')
var Activite = mongoose.model('activite')

exports.addActivites = (req, res) => {
  //console.log(req.body);
  //res.send('ok')
  var activite = new Activite({
    ...req.body
  });
  activite.save()
    .then(()=>res.render('index_main', {layout : 'index_layout'}))
    .catch(error => res.status(400).json({error}));
}
