const connection = require('../connection');

function resetDB() {
  connection.query('DELETE FROM users');
  connection.query('INSERT INTO users(id, name) VALUES ($1, $2)', [
    '1',
    'pally',
  ]);
}

module.exports = resetDB;
