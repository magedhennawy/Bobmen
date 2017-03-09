const express = require('express');
const router = express.Router();

/*var mongoose = require('mongoose');
var myDB = 'mongodb://admin:admin@ds127300.mlab.com:27300/users';
mongoose.connect(myDB);*/

var User = require('../models/user');

router.get('/', function(req, res){
  res.send('api works');
});



router.post('/users',function(req, res) {
  var user = new User();      // create a new instance of the Bear model
  user.username = req.body.username;  // set the users name (comes from the request)

  // save the bear and check for errors
  user.save(function(err) {
    if (err)
      res.send(err);
    res.json({ message: user.username + ' User created!' });
  });

});


/* GET api listing. */
router.get('/users', function(req, res){
  User.find(function(err, bears) {
    if (err)
      res.send(err);
    res.json(bears);
  });
});

module.exports = router;
