// Get dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
var router = require('./router');
var session = require('express-session');
var passport = require('passport');

var cookieParser = require('cookie-parser');

var user = require('./server/user/user');



mongoose.Promise = global.Promise;
var myDB = 'mongodb://admin:admin@ds127300.mlab.com:27300/users';
mongoose.connect(myDB);

// Get our API routes

const app = express();


// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(passport.initialize());

app.use(cookieParser());
var MemoryStore =session.MemoryStore;
app.use(session({
  name : 'app.sid',
  secret: "1234567890123123QWERTY",
  resave: true,
  store: new MemoryStore(),
  saveUninitialized: true
}));





// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes

app.use('/', user.frontEndMiddleware);
app.use('/api', router);



// Catch all other routes and return the index file
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
var fs = require('fs');
var http = require('http');


var server = http.createServer(app);



var io = require('socket.io')(server);
var count = 0;
io.on('connection', function (socket) {
  count++;

  console.log("User " + count + " connected")

  socket.on('add-message', function(data){
    for (var i in socket.rooms){
      socket.to(socket.rooms[i]).emit('message', data);
    }
  });

  socket.on('join-room', function(data){
    console.log(data);
    for (var i in socket.rooms){
      socket.leave(socket.rooms[i]);
    }
    socket.join(data, function(){
      console.log(socket.rooms);
    });
  });

  io.emit('news', { msg: 'One more person is online', count: count });
  socket.emit('private', { msg: 'Welcome you are the ' + count + ' person here' });

  socket.on('private', function (data) {
    console.log(data);
  });

  socket.on('disconnect', function() {
    count--;
    io.emit('news', { msg: 'Someone went home', count: count })
  })
});

/**
 * Create HTTP server.
 */
server.listen(3000, function () {
  console.log('HTTP  on port 3000');
});//redeploy

/**
 * Listen on provided port, on all network interfaces.
 */
