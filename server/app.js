const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const loginRouter = require('./routes/login');
const todoRouter = require('./routes/todo');

// intantiate express app
const app = express();

// defind middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// route
app.use('/login', loginRouter);
app.use('/todo', todoRouter);

module.exports = app;
