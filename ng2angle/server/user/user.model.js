/**
 * Created by Paul on 3/10/2017.
 */
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var userSchema   = new Schema({
  username: {
   type: String
  },
  salt: {
    type: String
  },
  saltedHash: {
    type: Object
  }

  });

module.exports = mongoose.model('User', userSchema);
