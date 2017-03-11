/**
 * Created by Paul on 3/10/2017.
 */

var User = require('./user.model');


function createUser(req, res ,next){
    var user = new User();      // create a new instance of the Bear model
    user.username = req.body.username;  // set the users name (comes from the request)

    // save the bear and check for errors
    user.save(function(err) {
      if (err)
        res.send(err);
      res.json({ message: user.username + ' User created!' });
    });

}


function getUser(req, res, next){
    User.find(function(err, data) {
      if (err)
        res.send(err);
      else{
        res.json(data);
      }
    });
}

function authMiddleware(req, res, next){
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
}

module.exports = {
  getUser: getUser,
  createUser: createUser,
  authMiddleware: authMiddleware
};
