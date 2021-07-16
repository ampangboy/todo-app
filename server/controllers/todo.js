const {
  Todo,
  createTodo: createTodoModel,
  updateTodo: updateTodoModel,
  deleteTodo: deleteTodoModel,
} = require('../models/todo');

exports.createTodo = async (req, res) => {
  const todo = new Todo(
    req.body.id,
    req.body.userId,
    req.body.username,
    req.body.todoName,
    req.body.isDone
  );

  await createTodoModel(todo);

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

  await updateTodoModel(todo);

  res.sendStatus(201);
};

exports.deleteTodo = async (req, res) => {
  const todo = new Todo(
    req.body.id,
    req.body.userId,
    req.body.username,
    req.body.todoName,
    req.body.isDone
  );

  await deleteTodoModel(todo);

  res.sendStatus(204);
};
