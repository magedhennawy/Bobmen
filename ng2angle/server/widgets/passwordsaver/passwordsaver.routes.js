/**
 * Created by Maged on 3/10/2017.
 */

var express = require('express');
var router = express.Router();
var passwordsaver = require('./passwordsaver');

router.get('/passwordsaver', passwordsaver.getPasswordSaver);

router.post('/passwordsaver', passwordsaver.addItem);

router.patch('/passwordsaver', passwordsaver.editItem);

router.delete('/passwordsaver/:index', passwordsaver.deleteItem);


module.exports = router;

