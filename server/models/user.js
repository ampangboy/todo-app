connection = require('../connection');

connection.connect();

const User = (user) => {
  this.id = id;
  this.username = username;
};

User.getAll = (result) => {
  connection.query('SELECT * FROM users', (err, res) => {
    if (err) throw err;
    result(null, res.rows[0]);
  });
};

module.exports = User;
