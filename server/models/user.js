connection = require("../connection");

let allUser = connection.query("SELECT id,name FROM user");

connection.end();

module.exports = allUser;
