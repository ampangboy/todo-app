const express = require('express');
const { createTodo, updateTodo, deleteTodo } = require('../controllers/todo');

const router = express.Router();

router.post('/', createTodo);

router.put('/', updateTodo);

router.delete('/', deleteTodo);

module.exports = router;
