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

  /*
   function signIn(req,res,next){
   console.log(req.body);
   if (!req.body.username || ! req.body.password) return res.status(400).send("Bad Request");
   User.findOne({username: req.body.username}, function(err, user){
   if (err) return res.status(500).end(err);
   if (!user || !checkPassword(user, req.body.password)) return res.status(401).end("Unauthorized");
   req.session.user = user;
   res.cookie('username', user.username, {secure: true, sameSite: true});
   return res.json({username: user.username});
   });
   }*/

  /*var todolistSchema   = new Schema(
   {todo: {title: String, description: String},
   complete: Boolean},*/
  console.log(req.body);
  var data = new ToDoList({todo:{title:req.body.title, description:req.body.description}, complete: false});
  ToDoList.create(data, function (err, data) {
    if (err)
      res.send(err);
    else{
      res.json(data);
    }
  });

  //console.log(req.body);
  /*res.send({"username":req.session.user});*/
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
