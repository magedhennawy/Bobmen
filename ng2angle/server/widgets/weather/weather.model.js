/**
 * Updated by Brandon on 3/17/2017.
 */
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var weatherSchema   = new Schema({
  _id: Schema.Types.ObjectId,
  celsius: {
    type: Boolean,
    default: true,
  },
  cityId: {
    type: String,
  },
  countryId: {
    type:String,
  }



});

module.exports = mongoose.model('Weather', weatherSchema);
