var sIController = require('../session/sessionInputController.js');


module.exports = function(app, express) {
  app.post('/sessionInput', sIController.updateInput);  
  app.get('/sessionInput', sIController.returnInput);
};