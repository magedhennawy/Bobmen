/**
 * Created by Maged on 3/10/2017.
 */
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;


var todolistSchema   = new Schema(
  {userid: Schema.Types.ObjectId,
  toDoList: {type:Array, default:[]}
  },
  {versionKey: false}
);


module.exports = mongoose.model('ToDoList', todolistSchema, "toDoList");
