/**
 * Created by Paul on 3/10/2017.
 */

var express = require('express');
var router = express.Router();
var user = require('./user');



router.put('/user',user.createUser);

router.post('/user/signin', user.signIn);

router.use('*', user.authMiddleware);
router.get('/user/signout', user.signOut);
router.get('/user', user.getUser);


module.exports = router;

