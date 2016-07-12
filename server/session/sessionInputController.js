var SessionInput = require('./sessionInputModel.js');
var Q = require('q');

var updateInput = Q.nbind(SessionInput.updateOne, SessionInput);
var returnInput = Q.nbind(SessionInput.findAll, SessionInput);

module.exports = {
  updateInput: function(req, res, next) {
    updateInput({username: req.body.username}, {$set: {input: req.body.sessionInput}})
    .then(function(response) {
      if (!response.acknowledged) {
        console.log('Update not acknowledged');
        res.send(match);
      } else {
        console.log("Successful Update: ", response);
        res.end();
      }
    });
  },
  returnInput: function(req, res, next) {
    returnInput({}).then(function(links) {
      res.json(links);
    });
  }
};  