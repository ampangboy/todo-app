const connection = require('../connection');

function resetDB() {
  connection.query('DELETE FROM users');
  connection.query('DELETE FROM todos');
  connection.query('INSERT INTO users(id, name) VALUES ($1, $2)', [
    '1',
    'pally',
  ]);
  connection.query(
    'INSERT INTO todos (id, username, user_id, name, is_done) VALUES ($1, $2, $3, $4, $5)',
    ['1', 'pally', 1, 'Cleaning bathroom', false]
  );
}

module.exports = resetDB;
