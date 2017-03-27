/**
 * Created by Paul on 3/23/2017.
 */
/**
 * Created by Maged on 3/10/2017.
 */

var express = require('express');
var router = express.Router();
var twitter = require('./twitter.js');
var passport = require('passport');

passport.use(twitter.getStrategy());

router.get('/auth/twitter', passport.authenticate('twitter'));
router.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/' , session: false}),
  function(req, res) {
    res.redirect('/');
    console.log(req.url);
  });
router.get('/twitter/tweets', twitter.getTweets);

module.exports = router;

