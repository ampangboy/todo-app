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
  await connection.query(
    'INSERT INTO todos (user_id, username, name, is_done) VALUES ($1, $2, $3, $4)',
    [newTodo.userId, newTodo.username, newTodo.todoName, newTodo.isDone]
  );
};

const updateTodo = async (todo) => {
  await connection.query(
    'UPDATE todos SET name = $1, is_done = $2 WHERE id = $3',
    [todo.todoName, todo.isDone, todo.id]
  );
};

module.exports = { Todo, createTodo, updateTodo };
