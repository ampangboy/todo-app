const { Todo, createTodo, updateTodo } = require('../models/todo');

exports.createTodo = async (req, res) => {
  const todo = new Todo(
    req.body.id,
    req.body.userId,
    req.body.username,
    req.body.todoName,
    req.body.isDone
  );

  await createTodo(todo);

  res.sendStatus(201);
};

exports.updateTodo = async (req, res) => {
  const todo = new Todo(
    req.body.id,
    req.body.userId,
    req.body.username,
    req.body.todoName,
    req.body.isDone
  );

  await updateTodo(todo);

  res.sendStatus(201);
};
