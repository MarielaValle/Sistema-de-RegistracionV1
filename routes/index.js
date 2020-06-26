var express = require('express');
var router = express.Router();

const indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexController.raiz);  

router.get('/check',function(req,res){
 if(req.session.usuarioLogueado==undefined){
     res.send('No estás logueado')
 }else{

    res.send('Estás logueado ' + req.session.usuarioLogueado.email)
 }


})

module.exports = router;
