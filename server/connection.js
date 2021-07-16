const { Client } = require('pg');

let clientConfig = {
  host: 'localhost',
  user: 'postgres',
  password: 'password',
  database: 'todo_app',
  port: 5432,
};

const client = new Client(clientConfig);

module.exports = client;
