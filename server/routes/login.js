var express = require('express');
const user = require('../controllers/user.js');
var router = express.Router();

router.get('/', user.findAll);

module.exports = router;
