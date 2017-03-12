// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
var router = require('./router');
var session = require('express-session');

var cookieParser = require('cookie-parser');



mongoose.Promise = global.Promise;
var myDB = 'mongodb://admin:admin@ds127300.mlab.com:27300/users';
mongoose.connect(myDB);

// Get our API routes

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
var MemoryStore =session.MemoryStore;
app.use(session({
  name : 'app.sid',
  secret: "1234567890QWERTY",
  resave: true,
  store: new MemoryStore(),
  saveUninitialized: true
}));





// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
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

/**
 * Create HTTP server.
 */
https.createServer(config, app).listen(3000, function () {
  console.log('HTTPS on port 3000');
});

/**
 * Listen on provided port, on all network interfaces.
 */
