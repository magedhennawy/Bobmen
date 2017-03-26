// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
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
var https = require('https');
var privateKey = fs.readFileSync( 'server.key' );
var certificate = fs.readFileSync( 'server.crt' );
var config = {
  key: privateKey,
  cert: certificate
};


var server = https.createServer(config, app);



var io = require('socket.io')(server);
var count = 0;
io.on('connection', function (socket) {
  count++;

  console.log("User " + count + " connected")

  socket.on('add-message', function(data){
    console.log(data);
    socket.broadcast.emit('message', data)
  })

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
  console.log('HTTPS on port 3000');
});

/**
 * Listen on provided port, on all network interfaces.
 */
