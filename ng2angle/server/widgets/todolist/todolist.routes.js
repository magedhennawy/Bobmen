/**
 * Created by Maged on 3/10/2017.
 */

var express = require('express');
var router = express.Router();
var todolist = require('./todolist');

/*
router.post('/todolist',todolist.createUser);
*/
/*
router.use('/', user.authMiddleware);
*/
router.get('/todolist', todolist.getToDoList);

router.post('/todolist', todolist.addItem);


module.exports = router;
