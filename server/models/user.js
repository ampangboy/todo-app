connection = require('../connection');

connection.connect();

const User = (user) => {
  this.id = id;
  this.username = username;
};

User.getAll = async (result) => {
  connection.query('SELECT * FROM users', (err, res) => {
    if (err) throw err;
    result(null, res.rows);
  });
};

module.exports = User;
