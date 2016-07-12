var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var SALT_ROUNDS = 10;

var UserSchema = new mongoose.Schema ({
  username: {
    type: string,
    required: true,
    unique: true
  },
  password: {
    type: string,
    required: true
  },
  salt: string
});

UserSchema.methods.comparePasswords = function(password) {
  var savedPassword = this.password;
  return Q.promise(function(resolve, reject) {
    bcrypt.compare(password, savedPassword, function(err, isMatch) {
      if (err) {
        reject(err);
      } else {
        resolve(isMatch);
      }
    });
  });
};

UserSchema.pre('save', function(next) {
  if (!user.isModified('password')) {
    return next();
  }

  bcrypt.genSalt(SALT_ROUNDS, function(err, salt) {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, null, function(err, hash) {

    });
    user.pasword = hash;
  });
});