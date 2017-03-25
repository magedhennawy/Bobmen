/**
 * Created by Paul on 3/23/2017.
 */
/**
 * Created by Paul on 3/23/2017.
 */
var Google = require('./google.model.js');

var google = require('googleapis');
var user = require('../../user/user');
var GoogleStrategy = require('passport-google-oauth20').Strategy
var calendar = google.calendar('v3');
var gmail = google.gmail('v1');
var OAuth2 = google.auth.OAuth2;
var oauth2Client = new OAuth2(
  '663917351280-1idvc9mcpo4lnrr6iqpq89ch4eptfuug.apps.googleusercontent.com',
  'ktuXwRsH_hedKNzvEN0xXaxA',
  "https://localhost:3000/api/auth/google/callback"
);


function getStrategy(){
  return new GoogleStrategy({
      clientID: '663917351280-1idvc9mcpo4lnrr6iqpq89ch4eptfuug.apps.googleusercontent.com',
      clientSecret: 'ktuXwRsH_hedKNzvEN0xXaxA',
      callbackURL: "https://localhost:3000/api/auth/google/callback",
      passReqToCallback: true
    },
    function googleAuth(req, token, tokenSecret, profile, cb){

      Google.findOne({userId: req.session.user._id}, function (err, user){
        if(user){
          var googleobj = {
            userId: req.session.user._id,
            appId: profile.id,
            tokenSecret: tokenSecret,
            token: token
          };
          Google.update({_id: user._id},googleobj, function (err, data) {
            if (err)
              return cb(err, googleobj)
            else{
              return cb(err, data)
            }
          });
          return cb(err, user)
        }
        else{
          var googleobj = new Google({
            userId: req.session.user._id,
            appId: profile.id,
            tokenSecret: tokenSecret,
            token: token
          });
          Google.create(googleobj, function (err, data) {
            if (err)
              return cb(err, googleobj)
            else{
              return cb(err, data)
            }
          });
        }

      });
    }

  )
}

function getGoogleProfile(userId, callback){
  Google.findOne({userId: userId}, function(err, data){
    if (err) return res.status(500).send('Twitter profile not found')
    if (data){
      return callback(data);
    }

  })
}
function getEmails(req, res, next){



  getGoogleProfile(req.session.user._id, function(data){
    console.log(data);
    oauth2Client.setCredentials({

      access_token: data.token,
      refresh_token: data.tokenSecret
      // Optional, provide an expiry_date (milliseconds since the Unix Epoch)
      // expiry_date: (new Date()).getTime() + (1000 * 60 * 60 * 24 * 7)
    });

    gmail.users.threads.list({
      userId: 'me',
      auth: oauth2Client,
      q: 'is:unread',
      maxResults: 10
    },
     function(err, response){
       if (err) return res.status(500).send(err);
       return res.json(response);
     }
    )


    /*
    var client = new Twitter({
      consumer_key: 'HRzzSlnUoIur8wPxJc8W4kdt2',
      consumer_secret: '9O3tpd5MOI0sMmAFkChdvSoU7hhbej7hzAhQaqKQYtRyV2l7Ty',
      access_token_key: data.token,
      access_token_secret: data.tokenSecret
    });

    var params = {screen_name: 'nodejs'};

    client.get('statuses/home_timeline', params, function(error, tweets, response){
      if (!error) {
        console.log(tweets);
        res.json(tweets);
      }
    })
    */
  })

}


function getEvents(req,res, next){

  return;
}



module.exports = {
  getEmails: getEmails,
  getStrategy: getStrategy,
  getEvents: getEvents
};
