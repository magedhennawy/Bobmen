/**
 * Created by Paul on 3/23/2017.
 */
var TwitterDB = require('./twitter.model');

var twitterConfig = require("../../../config");
var TwitterStrategy = require('passport-twitter');
var Twitter = require('twitter');
var user = require('../../user/user');

function getTwitterProfile(res, userId, callback){
  TwitterDB.findOne({userId: userId}, function(err, data){
    if (err) return res.status(403).send('Twitter profile not found, db err');
    if(!data) return res.status(403).send('Twitter profile not found');
      return callback(data);

  })
}

function getStrategy(){
  return new TwitterStrategy({
      consumerKey: twitterConfig.twitterconfig.consumerKey,
      consumerSecret: twitterConfig.twitterconfig.consumerSecret,
      callbackURL: "https://bobmen.cms-weblab.utsc.utoronto.ca/api/auth/twitter/callback",
      passReqToCallback: true
    },
    function (req, token, tokenSecret, profile, cb){
      //what needs to happen is you create an entry in Twitter with the profileID, tokensecret, and token, along with the userID
      TwitterDB.findOne({userId: req.session.user._id}, function (err, user){
        var twitter = {
          userId: req.session.user._id,
          appId: profile.id,
          tokenSecret: tokenSecret,
          token: token
        };
        if(user){
          TwitterDB.update({_id: user._id},twitter, function (err, data) {
            if (err){
              return cb(err, twitter);
            }
            else{
              return cb(err, data)
            }
          });
        }
        else{
          TwitterDB.create(twitter, function (err, data) {
            if (err){

              return cb(err, twitter);
            }

            else{

              return cb(err, data)
            }
          });
        }

      });
    }
  )
}
function getTweets(req, res, next){
  getTwitterProfile(res, req.session.user._id, function(data){
    var client = new Twitter({
      consumer_key: twitterConfig.twitterconfig.consumerKey,
      consumer_secret: twitterConfig.twitterconfig.consumerSecret,
      access_token_key: data.token,
      access_token_secret: data.tokenSecret
    });
    var params = {screen_name: 'nodejs', count: 10};
    client.get('statuses/home_timeline', params, function(err, tweets, response){
      if (err) return res.status(500).send(err);

      return res.json(tweets);

    })
  })
}


module.exports = {
  getTweets: getTweets,
  getStrategy: getStrategy,
};
