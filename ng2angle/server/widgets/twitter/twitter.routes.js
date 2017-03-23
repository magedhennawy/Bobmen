/**
 * Created by Paul on 3/23/2017.
 */
/**
 * Created by Maged on 3/10/2017.
 */

var express = require('express');
var router = express.Router();
var twitter = require('./twitter.js');

/*

 */
/*

 */
router.get('/twitter/tweets', twitter.getTweets);

module.exports = router;

