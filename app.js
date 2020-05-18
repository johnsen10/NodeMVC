const express= require('express');

const app= express();

app.use(express.static('public'));

const bodyParser = require('body-parser');
const mongoose= require('mongoose');
const activite = require('./routes/activite')

const users=require('./routes/users')

const authentication =require('./routes/auth')
const auth_middleware= require('./middleware/auth_middleware');
const cookieParser = require("cookie-parser");

app.use(cookieParser());

//Configuration bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static('public'));

//*************************DEFINITION DES ROUTES********************************************

app.use('/signup',users );

app.use('/login',authentication );

app.use('/addActivites',auth_middleware, activite);

app.get('/index_main', (req, res) => {

res.render('index_main', {layout : 'index_layout'});
});









//tjrs en fin de page
module.exports=app;
