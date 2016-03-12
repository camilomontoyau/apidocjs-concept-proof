// Dependencies
var express = require('express');
var router = express.Router();
var app = express();


// Models
var Task = require('./models/task');






Task.methods(['get','put','post','delete']);

/*
User.before('post', hash_password)
  .before('put', hash_password);
*/

/*
User.after('get', function(req, res, next) {
  res.locals.bundle = cleanResponses.cleanPasswords(res.locals.bundle);
  next();
});
*/

/*
User.after('post', function(req, res, next) {
  res.locals.bundle = cleanResponses.cleanPasswords(res.locals.bundle);
  next();
});
*/

/*
User.after('put', function(req, res, next) {
  res.locals.bundle = cleanResponses.cleanPasswords(res.locals.bundle);
  next();
});
*/


Task.register(router, '/task');





module.exports = router;