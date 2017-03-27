/**
 * Created by Maged on 3/10/2017.
 */
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;


var passwordSaverSchema   = new Schema(
  {userid: Schema.Types.ObjectId,
    passwords: {type:Array, default:[]}
  },
  {versionKey: false}
);


module.exports = mongoose.model('passwordSaver', passwordSaverSchema, "passwordSaver");
