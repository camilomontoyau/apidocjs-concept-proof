// Dependencies
var express = require('express');
var router = express.Router();
var app = express();


// Models
var Task = require('./models/task');

Task.methods(['get','put','post','delete']);

Task.register(router, '/task');





module.exports = router;