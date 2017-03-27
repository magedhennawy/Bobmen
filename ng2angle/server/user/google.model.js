/**
 * Created by Maged on 3/10/2017.
 */
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var googleSchema   = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
  },
  token: {
    type: String
  },
  tokeSecret: {
    type: String
  },
  twitterId: {
    type: String
  }

});

module.exports = mongoose.model('Google', googleSchema, "google");
