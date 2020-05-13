const express= require('express');

//const mongoose= require('mongoose');

const app= express();

app.use(express.static('public'));

app.get('/', (req, res) => {
//Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
res.render('index_main', {layout : 'index_layout'});
});








//tjrs en fin de page
module.exports=app;
