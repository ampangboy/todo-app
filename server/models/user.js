const connection = require('../connection');

connection.connect();

class User {
  constructor(id, username) {
    this.id = id;
    this.username = username;
  }
}

User.getAll = async () => {
  const res = await connection.query('SELECT * FROM users');
  return res.rows;
};

User.createUser = async (newUser) => {
  const values = [newUser.id, newUser.username];
  connection.query('INSERT INTO users(id, name) VALUES ($1, $2)', values);
};

module.exports = User;
