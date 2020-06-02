var express = require('express');
var router = express.Router();

const registroController = require ('../controllers/registroController');

/* GET users listing. */
router.get('/', registroController.raiz)

module.exports = router;




