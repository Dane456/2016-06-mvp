var mongoose = require('mongoose');
var express = require('express');

var app = express();

mongoose.connect('mongodb://localhost/shortly');
var db = mongoose.connection();

require('./config/middleware.js');
require('./config/routes.js');

app.listen(8000);
module.exports = app;