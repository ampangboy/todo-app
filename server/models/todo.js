const connection = require('../connection');

class Todo {
  constructor(id, userId, username, todoName, isDone) {
    this.id = id;
    this.user_id = userId;
    this.username = username;
    this.todoName = todoName;
    this.isDone = isDone;
  }
}

const createTodo = async (newTodo) => {
  await connection.query(
    'INSERT INTO todos (user_id, username, name, is_done) VALUES ($1, $2, $3, $4)',
    [newTodo.user_id, newTodo.username, newTodo.todoName, newTodo.isDone]
  );
};

module.exports = { Todo, createTodo };
