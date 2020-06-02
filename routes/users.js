
var express = require('express');
var router = express.Router();
const { check, validationResult, body} = require ('express-validator');
//____________subida avatar_____________
var multer = require('multer');
var path=require('path')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname,'../public/avatars'))   
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname) )
  }
});

var upload = multer({ storage: storage });


//__________________armar archivo de usuarios------------//





//---------------------------/----------------------------/
const usersController = require('../controllers/usersController');


router.post('/',upload.any(),
[

  check('nombre').isLength({min:2}).withMessage('debe poner un nombre válido'),
  check('email').isEmail().withMessage('debe poner un email válido'),
  check('contraseña').isLength({min:2}).withMessage('debe poner una contraseña válida')
 

],
usersController.crear); 

router.post('/login', usersController.login)

module.exports=router;