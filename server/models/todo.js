const connection = require('../connection');

class Todo {
  constructor(id, username, todoName, isDone) {
    this.id = id;
    this.username = username;
    this.todoName = todoName;
    this.isDone = isDone;
  }
}

Todo.createTodo = async (newTodo) => {
  await connection.query(
    'INSERT INTO todos (user_id, name, is_done) VALUES ($2, $3, $4)',
    [newTodo.username, newTodo.todoName, newTodo.isDone]
  );
};

module.exports = Todo;
