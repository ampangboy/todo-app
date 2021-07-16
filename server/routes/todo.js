const express = require('express');
const { createTodo, updateTodo } = require('../controllers/todo');

const router = express.Router();

router.post('/', createTodo);

router.put('/', updateTodo);

module.exports = router;
