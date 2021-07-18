const connection = require('../connection');

class Todo {
  constructor(id, userId, username, todoName, isDone) {
    this.id = id;
    this.userId = userId;
    this.username = username;
    this.todoName = todoName;
    this.isDone = isDone;
  }
}

const createTodo = async (newTodo) => {
  const result = await connection.query(
    'INSERT INTO todos (user_id, username, name, is_done) VALUES ($1, $2, $3, $4) RETURNING id;',
    [newTodo.userId, newTodo.username, newTodo.todoName, newTodo.isDone]
  );

  return result.rows[0];
};

const updateTodo = async (todo) => {
  await connection.query(
    'UPDATE todos SET name = $1, is_done = $2 WHERE id = $3',
    [todo.todoName, todo.isDone, todo.id]
  );
};

const deleteTodo = async (todo) => {
  await connection.query('DELETE FROM todos WHERE id = $1', [todo.id]);
};

const getAllTodos = async (id, username) => {
  const res = await connection.query(
    'SELECT id, user_id, username, name, is_done FROM todos WHERE user_id = $1 AND username = $2',
    [id, username]
  );
  return res.rows;
};

module.exports = { Todo, createTodo, updateTodo, deleteTodo, getAllTodos };
