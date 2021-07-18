const express = require('express');
const {
  createTodo,
  updateTodo,
  deleteTodo,
  getTodo,
} = require('../controllers/todo');

const router = express.Router();

router.put('/', createTodo);

router.patch('/', updateTodo);

router.delete('/', deleteTodo);

router.post('/', getTodo);

module.exports = router;
