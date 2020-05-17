require('./Model/dbConfig')
const http=require('http');
const app =require('./app');
const handlebars = require('express-handlebars');


app.set('port', process.env.PORT || 3000);

//*************CONFIG HANDLEBAR'S ENGINE *******************************
app.set('view engine', 'hbs');
app.engine('hbs', handlebars({
layoutsDir: __dirname + '/views/layouts',
defaultLayout: "index_layout",
extname: 'hbs'
}));
//*****************END************************************************

const server= http.createServer(app);

server.listen(process.env.PORT || 3000);
