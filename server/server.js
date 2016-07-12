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

require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

app.listen(8000, function(err, success) {
  if(!err) {
    console.log("Listening on port 8000.....");
  }
});
module.exports = app;