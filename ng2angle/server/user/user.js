/**
 * Created by Paul on 3/10/2017.
 */

var User = require('./user.model');
var crypto = require('crypto');

var checkPassword = function(user, password){
  var hash = crypto.createHmac('sha512', user.salt);
  hash.update(password);
  var value = hash.digest('base64');
  return (user.saltedHash === value);
};


function createUser(req, res ,next){
  salt = crypto.randomBytes(16).toString('base64');
  var hash = crypto.createHmac('sha512', salt);
  hash.update(req.body.password);
  var data = new User({username: req.body.username, salt: salt, saltedHash: hash.digest('base64')});     // create a new instance of the Bear model
      // set the users name (comes from the request)

    User.findOne({username: req.body.username}, function(err, user){
      if (err) return res.status(500).end(err);
      if (user) return res.status(409).end("Username " + req.body.username + " already exists");
      data.save(function (err, user) {
        if (err) return res.status(500).end(err);
        return res.json(user);
      });
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

  if (!req.session.user) return res.status(403).end("Forbidden");
  return next()
}

function signOut(req,res,next){
  req.session.destroy(function(err) {
    if (err) return res.status(500).end(err);
    return res.end();
  });
}

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
}


module.exports = {
  getUser: getUser,
  createUser: createUser,
  authMiddleware: authMiddleware,
  signIn: signIn,
  signOut: signOut
};
