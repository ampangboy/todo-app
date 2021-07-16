var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var loginRouter = require('./routes/login');

//intantiate express app
var app = express();

// defind middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// route
app.use('/login', loginRouter);

module.exports = app;
