connection = require('../connection');

connection.connect();

const User = (user) => {
  this.id = id;
  this.username = username;
};

User.getAll = async () => {
  let res;
  try {
    res = await connection.query('SELECT * FROM users');
  } catch (err) {
    throw err;
  }
  return res.rows;
};

User.createUser = async (User) => {
  let values = [User.id, User.username];
  let res;

  try {
    res = await connection.query(
      'INSERT INTO users(id, name) VALUES ($1, $2)',
      values
    );
  } catch (err) {
    throw err;
  }
};

module.exports = User;
