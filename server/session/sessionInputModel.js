var mongoose = require('mongoose');

var SessionInputSchema = new mongoose.Schema({
  username: String,
  input: Number
});

module.exports = mongoose.model('SessionInput', SessionInputSchema);