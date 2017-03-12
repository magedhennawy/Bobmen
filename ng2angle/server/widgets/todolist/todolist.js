/**
 * Created by Maged on 3/10/2017.
 */

var ToDoList = require('./todolist.model.js');

/*
function createUser(req, res ,next){
  var user = new ToDoList();      // create a new instance of the Bear model
  user.username = req.body.username;  // set the users name (comes from the request)

  // save the bear and check for errors
  user.save(function(err) {
    if (err)
      res.send(err);
    res.json({ message: user.username + ' User created!' });
  });

}*/

/*  {userid: Schema.Types.ObjectId,
 toDoList: [{
 title:String,
 description:String,
 complete:Boolean
 }]
 },
 {versionKey: false}
 );*/


function addItem(req,res,next){
  var item = new ToDoList({userid:req.session.user._id, toDoList:[{todo:{title:req.body.title, description:req.body.description}, complete: false}]});
  ToDoList.find({userid:req.session.user._id},  function (err, data) {
      if (err)
          res.send(err);
      else{
          if(data.length > 0 ){
              ToDoList.update({userid:req.session.user._id},{$push:{toDoList: {todo:{title:req.body.title, description:req.body.description}, complete: false} }}, function (err, data) {
                  if (err)
                      res.send(err);
                  else{
                      res.json(data);
                  }
              });
          }else{
              ToDoList.create(item, function (err, data) {
                  if (err)
                      res.send(err);
                  else{
                    res.json(data);
                  }
              });
          }
      }
  });
}

function editItem(req,res,next){
  var item = new ToDoList({userid:req.session.user._id, toDoList:[{todo:{title:req.body.title, description:req.body.description}, complete: false}]});
  ToDoList.find({userid:req.session.user._id},  function (err, data) {
    if (err)
      res.send(err);
    else{
      if(data.length > 0 ){
        ToDoList.update({userid:req.session.user._id},{$push:{toDoList: {todo:{title:req.body.title, description:req.body.description}, complete: false} }}, function (err, data) {
          if (err)
            res.send(err);
          else{
            res.json(data);
          }
        });
      }else{
        ToDoList.create(item, function (err, data) {
          if (err)
            res.send(err);
          else{
            res.json(data);
          }
        });
      }
    }
  });
}

function getToDoList(req, res, next){
  ToDoList.find({userid: req.session.user._id},function(err, data) {
    if (err)
      res.send(err);
    else{
      res.json(data);
    }
  });
}

/*function authMiddleware(req, res, next){
  User.findOne({username: req.header.username}, function(err, data){
    if (err){
      console.log(err)
      res.status(500).json(err);
    }


    else{
      req.userId = data._id;
      next();
    }
  })
}*/

module.exports = {
  getToDoList: getToDoList,
  addItem: addItem,
  editItem: editItem
/*
  createUser: createUser,
*/
/*  authMiddleware: authMiddleware*/
};
