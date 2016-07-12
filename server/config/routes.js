var sIController = require('../session/sessionInputController.js');
var helpers = require('./helpers');

module.exports = function(app, express) {

  app.post('/sessionInput', sIController.updateInput);  
  app.get('/sessionInput', sIController.returnInput);
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};