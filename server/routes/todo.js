const express = require('express');
const todo = require('../controllers/todo');

const router = express.Router();

router.post('/', todo.createPost);

module.exports = router;
