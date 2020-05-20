const express = require('express');
const router = express.Router();


const mongoose= require('mongoose');

const Activite = mongoose.model('activite');

const auth_middleware= require('../middleware/auth_middleware');

const userCtrl= require('../controllers/userController');
const activiteCtrl = require('../controllers/activiteController')
const indexCtrl=require('../controllers/indexController')

router.get('/',indexCtrl.index)


//********************CATALOG ROUTE****************************
router.get('/catalog', (req, res) => {
listerActivite(req, res);
});

function listerActivite(req, res){
  Activite.find({}).lean()
  .exec(function(e, docs) {
       res.render('catalog_main',{layout:'index_layout','listActivite' : docs});
  });
}
//***********************END OF CATALOG ROUTE****************************



router.get('/signup',userCtrl.signup );
router.post('/signup',userCtrl.signup_post);


router.get('/login',userCtrl.login)
router.post('/login',userCtrl.login_post)

router.get('/addActivites',auth_middleware, activiteCtrl.addActivites_page);
router.get('/addActivites', activiteCtrl.addActivites);










module.exports=router