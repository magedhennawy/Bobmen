/**
 * Created by Paul on 3/10/2017.
 */


var express = require('express');
var router = express.Router();
var userRouter = require('./server/user/user.routes');
var weatherRouter = require('./server/widgets/weather/weather.routes');
var toDoListRouter = require('./server/widgets/todolist/todolist.routes');
var twitterRouter = require('./server/widgets/twitter/twitter.routes');


router.use('/', userRouter);
router.use('/', weatherRouter);
router.use('/', toDoListRouter);
router.use('/', twitterRouter);

module.exports = router;

