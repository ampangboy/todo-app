const express = require('express');
const {
  createTodo,
  updateTodo,
  deleteTodo,
  getTodo,
} = require('../controllers/todo');

const router = express.Router();

router.post('/', createTodo);

router.put('/', updateTodo);

router.delete('/', deleteTodo);

router.get('/', getTodo);

module.exports = router;
