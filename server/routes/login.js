var express = require('express');
const user = require('../controllers/user.js');
var router = express.Router();

router.post('/', user.userLogin);

module.exports = router;
