/**
 * Created by Paul on 3/23/2017.
 */
/**
 * Created by Paul on 3/23/2017.
 */
/**
 * Created by Maged on 3/10/2017.
 */

var express = require('express');
var router = express.Router();
var google = require('./google');
var passport = require('passport');


/*

 */
/*

 */
passport.use(google.getStrategy());
router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'https://www.googleapis.com/auth/calendar.readonly','https://mail.google.com/', 'https://www.googleapis.com/auth/gmail.readonly', 'https://www.googleapis.com/auth/userinfo.email'] }));

router.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login', session: false }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });


router.get('/google/events', google.getEvents);
router.get('/google/emails', google.getEmails);

module.exports = router;

