const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const logger = require('morgan');
const loginRouter = require('./routes/login');
const todoRouter = require('./routes/todo');

// intantiate express app
const app = express();

// defind middleware
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// route
app.use('/api/login', loginRouter);
app.use('/api/todo', todoRouter);

module.exports = app;
