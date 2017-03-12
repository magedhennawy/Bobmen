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


function addItem(req,res,next){
  res.send({"task":"COOL"});
}

function getToDoList(req, res, next){
  ToDoList.find(function(err, data) {
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
  addItem: addItem
/*
  createUser: createUser,
*/
/*  authMiddleware: authMiddleware*/
};
