var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var weatherSchema   = new Schema({
  userid: Schema.Types.ObjectId,
  celsius: {
    type: Boolean,
    default: true
  },
  cityId: {
    type: Number,
    default: 6167865
  }



});

module.exports = mongoose.model('Weather', weatherSchema);
