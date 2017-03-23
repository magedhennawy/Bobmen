/**
 * Created by Paul on 3/23/2017.
 */
var TwitterDB = require('./twitter.model.js');

var Twitter = require('twitter');

function getTwitterProfile(userId, callback){
  TwitterDB.findOne({userId: userId}, function(err, data){
    if (err) return res.status(500).send('Twitter profile not found')
    if (data){
      return callback(data);
    }

  })
}
function getTweets(req, res, next){
  getTwitterProfile(req.session.user._id, function(data){
    var client = new Twitter({
      consumer_key: 'HRzzSlnUoIur8wPxJc8W4kdt2',
      consumer_secret: '9O3tpd5MOI0sMmAFkChdvSoU7hhbej7hzAhQaqKQYtRyV2l7Ty',
      access_token_key: data.token,
      access_token_secret: data.tokenSecret
    });

    var params = {screen_name: 'nodejs'};

    client.get('statuses/user_timeline', params, function(error, tweets, response){
      if (!error) {
        console.log(tweets);
        res.json(tweets);
      }
    })

  })

}


module.exports = {
  getTweets: getTweets
};
