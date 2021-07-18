const {
  Todo,
  createTodo: createTodoModel,
  updateTodo: updateTodoModel,
  deleteTodo: deleteTodoModel,
  getAllTodos,
} = require('../models/todo');
const { User } = require('../models/user');

exports.createTodo = async (req, res) => {
  const todo = new Todo(
    req.body.id,
    req.body.userId,
    req.body.username,
    req.body.todoName,
    req.body.isDone
  );

  const result = await createTodoModel(todo);

  res.status(201).json(result);
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
  const user = new User(req.body.userId, req.body.username);

  const result = await getAllTodos(user.id, user.username);

  const todos = result.map(
    (t) => new Todo(t.id, t.user_id, t.username, t.name, t.is_done)
  );

  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    todos,
  });
};
