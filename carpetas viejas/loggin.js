var express = require('express');
var router = express.Router();

const logginController = require ('../controllers/logginController');

/* GET users listing. */
router.get('/', logginController.raiz)

module.exports = router;
