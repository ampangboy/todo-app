const {
  Todo,
  createTodo: createTodoModel,
  updateTodo: updateTodoModel,
  deleteTodo: deleteTodoModel,
  getAllTodos,
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

exports.getTodo = async (req, res) => {
  const result = await getAllTodos(req.body.userId, req.body.username);
  res.send(result);
};
