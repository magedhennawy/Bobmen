/**
 * Created by Paul on 3/23/2017.
 */
var TwitterDB = require('./twitter.model.js');

var Twitter = require('twitter');
var twitterConfig = require("../../../config");

function getTwitterProfile(userId, callback){
  TwitterDB.findOne({userId: userId}, function(err, data){
    if (err) return res.status(500).send('Twitter profile not found');
    if (data){
      return callback(data);
    }

  })
}
function getTweets(req, res, next){
  getTwitterProfile(req.session.user._id, function(data){
    var client = new Twitter({
      consumer_key: twitterConfig.twitterconfig.consumerKey,
      consumer_secret: twitterConfig.twitterconfig.consumerSecret,
      access_token_key: data.token,
      access_token_secret: data.tokenSecret
    });
    var params = {screen_name: 'nodejs', count: 10};
    client.get('statuses/home_timeline', params, function(error, tweets, response){
      if (!error) {
        res.json(tweets);
      }
    })
  })
}


module.exports = {
  getTweets: getTweets
};
