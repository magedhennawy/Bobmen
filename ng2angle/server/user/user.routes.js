/**
 * Created by Paul on 3/10/2017.
 */

var express = require('express');
var router = express.Router();
var user = require('./user');
const path = require('path');



/*var gogle = require('googleapis');
var googleAuth = require('google-auth-library');*/

//-----------Google ---------///



//-----------Twitter ---------///


//-----------Routes ---------///

router.put('/user',user.createUser);
router.post('/user/signin', user.signIn);

router.use('*', user.authMiddleware);
//----Twitter ----//


//---Google----//

//-----------KEK----------//
router.get('/user/signout', user.signOut);
router.get('/user', user.getUser);


module.exports = router;

