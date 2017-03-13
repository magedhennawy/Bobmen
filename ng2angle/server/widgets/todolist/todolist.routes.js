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

router.patch('/todolist', todolist.editItem);

router.delete('/todolist/:index', todolist.deleteItem);


module.exports = router;

