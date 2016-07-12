var mongoose = require('mongoose');

var SessionSchema = new mongoose.Schema({
  username: String,
  input: Number
});

module.exports = mongoose.model('SessionInput', SessionInputSchema);