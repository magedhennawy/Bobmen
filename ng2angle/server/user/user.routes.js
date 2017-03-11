/**
 * Created by Paul on 3/10/2017.
 */

var express = require('express');
var router = express.Router();
var user = require('./user');

router.post('/user',user.createUser);
router.use('/', user.authMiddleware);
router.get('/user', user.getUser);


module.exports = router;

