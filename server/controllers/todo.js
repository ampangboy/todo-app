const { Todo, createTodo } = require('../models/todo');

exports.createPost = async (req, res) => {
  const todo = new Todo(
    null,
    req.body.user_id,
    req.body.username,
    req.body.todoName,
    req.body.isDone
  );

  await createTodo(todo);

  res.sendStatus(201);
};
