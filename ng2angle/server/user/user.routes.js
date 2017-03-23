/**
 * Created by Paul on 3/10/2017.
 */

var express = require('express');
var router = express.Router();
var user = require('./user');
const path = require('path');

var passport = require('passport');
var FacebookStrategy = require('passport-facebook');
var TwitterStrategy = require('passport-twitter');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
/*var gogle = require('googleapis');
var googleAuth = require('google-auth-library');*/

//-----------Google ---------///

passport.use(new GoogleStrategy({
    clientID: 'GOOGLE_CLIENT_ID',
    clientSecret: 'GOOGLE_CLIENT_SECRET',
    callbackURL: "http://www.example.com/auth/google/callback",
    passReqToCallback: true
},
user.googleAuth
))


//-----------Twitter ---------///
passport.use(new TwitterStrategy({
    consumerKey: 'HRzzSlnUoIur8wPxJc8W4kdt2',
    consumerSecret: '9O3tpd5MOI0sMmAFkChdvSoU7hhbej7hzAhQaqKQYtRyV2l7Ty',
    callbackURL: "https://localhost:3000/api/auth/twitter/callback",
    passReqToCallback: true
  },
  user.twitterAuth
));

//-----------Routes ---------///

router.put('/user',user.createUser);
router.post('/user/signin', user.signIn);

router.use('*', user.authMiddleware);
router.get('/auth/twitter', passport.authenticate('twitter'));
router.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/' , session: false}),
  function(req, res) {
  res.redirect('/')
    console.log(req.url);
  });
router.get('/user/signout', user.signOut);
router.get('/user', user.getUser);


module.exports = router;

