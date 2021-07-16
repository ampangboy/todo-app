var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "bitname",
  database: "todo_app",
});

connection.connect();
