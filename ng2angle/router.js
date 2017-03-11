/**
 * Created by Paul on 3/10/2017.
 */
var express = require('express');
var router = express.Router();
var userRouter = require('./server/user/user.routes');
var weatherRouter = require('./server/widgets/weather/weather.routes');

router.use('/', userRouter);
router.use('/', weatherRouter);

module.exports = router;

