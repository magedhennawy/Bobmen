/**
 * Created by Maged on 3/10/2017.
 */
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var todolistSchema   = new Schema(
  {todo: {title: String, description: String},
  complete: Boolean},
  {versionKey: false}
);

module.exports = mongoose.model('ToDoList', todolistSchema);
