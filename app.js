const express= require('express');
var bodyParser = require('body-parser');
const mongoose= require('mongoose');
var activite = require('./routes/activite')

const app= express();


//Configuration bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static('public'));
//definir lesRoute
app.use('/', activite);

app.get('/', (req, res) => {
//Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
res.render('index_main', {layout : 'index_layout'});
});


//tjrs en fin de page
module.exports=app;
