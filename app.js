const express= require('express');

const app= express();

app.use(express.static('public'));

const bodyParser = require('body-parser');
const mongoose= require('mongoose');
const activite = require('./routes/activite')

const Activite = mongoose.model('activite');

const catalogRouter= require('./routes/catalog');

const users=require('./routes/users')

const authentication =require('./routes/auth')
const auth_middleware= require('./middleware/auth_middleware');
const cookieParser = require("cookie-parser");

app.use(cookieParser());

//Configuration bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static('public'));

//*************************DEFINITION DES ROUTES********************************************

//*******************INDEX ROUTE*********************************


//******************END OF INDEX ROUTE**************************

app.get('/index', (req, res) => {
    res.redirect('/');
});

app.use('/', catalogRouter)


app.get('/logout', (req, res) => {
    if (req.cookies.token) {
        res.clearCookie('token');
        res.redirect('/login');
    }
    else
        res.redirect('/')
});



//tjrs en fin de page
module.exports=app;


/*

app.use('/signup',users );

app.use('/login',authentication );

app.use('/addActivites',auth_middleware, activite);

app.get('/index', (req, res) => {

res.render('index_main', {layout : 'index_layout'});
});

app.get('/catalog', (req, res) => {
/*Activite.find(function(err, listActivite){
                      if (err){
                          res.send(err);
                      }
                   // console.log(listActivite)
                       listActivites=listActivite
res.render('catalog_main', {layout : 'index_layout','listActivite':listActivite});

                  });
console.log(listActivites)*/
/*listerActivite(req, res);


});

function listerActivite(req, res){
  Activite.find({}).lean()
  .exec(function(e, docs) {
       res.render('catalog_main',{layout:'index_layout','listActivite' : docs});
  });
}



*/