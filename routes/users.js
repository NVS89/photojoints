var express = require('express');
var router = express.Router();

var User = require('../models/user').User;

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({}, function(err, docs) {
    if(!err) {
      res.json(200, docs);
    } else {
      res.json(500, { message: err });
    }
  });
});

router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  User.findById(id, function(err, doc) {
    if(!err && doc) {
      res.json(200, doc);
    } else if(err) {
      res.json(500, { message: "Error loading user." + err});
    } else {
      res.json(404, { message: "User not found."});
    }
  });
});

router.post('/', function(req, res, next) {
  var loginName = req.body.loginName;
  var password = req.body.password;

  //Workout.findOne({ name: workout_name }, function(err, doc) {  // This line is case sensitive.
  User.findOne({ name: { $regex: new RegExp(loginName, "i") } }, function(err, doc) {  // Using RegEx - search is case insensitive
    if(!err && !doc) {

      var newUser = new User();

      newUser.loginName = loginName;
      newUser.password = password;

      newUser.save(function(err) {
        if(!err) {
          res.json(201, {message: "User created with name: " + newUser.loginName });
        } else {
          res.json(500, {message: "Could not create user. Error: " + err});
        }

      });

    } else if(!err) {

      // User is trying to create a workout with a name that already exists.
      res.json(403, {message: "User with that name already exists, please update instead of create or create a new workout with a different name."});

    } else {
      res.json(500, { message: err});
    }
  })
});


module.exports = router;
