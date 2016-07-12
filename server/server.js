var mongoose = require('mongoose');
var express = require('express');

var app = express();
var dbURI = 'mongodb://localhost/poller';

mongoose.connect(dbURI);
mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + dbURI);
}); 
mongoose.connection.on('error', function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 

require('./config/middleware.js');
require('./config/routes.js');

app.listen(8000);
module.exports = app;