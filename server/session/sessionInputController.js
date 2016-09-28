var SessionInput = require('./sessionInputModel.js');
var Q = require('q');

var updateInput = Q.nbind(SessionInput.updateOne, SessionInput);
var returnInput = Q.nbind(SessionInput.findAll, SessionInput);

module.exports = {
  updateInput: function(req, res, next) {
    console.log('Express updateInput: ', req.body.username, req.body.input);
    SessionInput.update({username: req.body.username}, {$set: {input: req.body.input}})
    .then(function(response) {
      console.log('in mongodb update response');
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
    console.log('Express returnInput: ');
    SessionInput.find().then(function(links) {
      console.log('Db call returning :', links);
      res.json(links);
    });
  }
};  