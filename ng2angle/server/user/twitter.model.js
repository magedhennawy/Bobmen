/**
 * Created by Paul on 3/10/2017.
 */
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var twitterSchema   = new Schema({
  userId: {
    type: Schema.Types.ObjectId
  },
  token: {
    type: String
  },
  tokenSecret: {
    type: String
  },
  twitterId: {
    type: String
  }

});

module.exports = mongoose.model('Twitter', twitterSchema, "twitter");
