const express= require('express');

//const mongoose= require('mongoose');

const app= express();

app.use(express.static('public'));
var bodyParser = require('body-parser');
const mongoose= require('mongoose');
var activite = require('./routes/activite')


//Configuration bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static('public'));
//definir lesRoute
app.use('/', activite);

app.get('/index_main', (req, res) => {
//Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
res.render('index_main', {layout : 'index_layout'});
});









//tjrs en fin de page
module.exports=app;
