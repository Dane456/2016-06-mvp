var app = ('../server.js');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var express = require('express');
module.exports = function(app, express) {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../client'));
  app.use('/node_modules', express.static(__dirname + '/../../node_modules'));
};