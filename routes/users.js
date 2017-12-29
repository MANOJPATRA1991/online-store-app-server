var express = require('express');
var router = express.Router();

var User = require('../models/User');

var Verify = require('./verify');

var passport = require('passport');
var bodyParser = require('body-parser');

// Register
router.post('/register', function(req, res){

  // Create a new User instance
  let newUser = new User({
    username: req.body.username,
    email: req.body.email
  });

  // Register new user
  User.register(newUser, req.body.password, function(err, user) {

    if(err){
      
      // Duplicate record  
      if(err.code === 11000){
          return res.status(500)
          .json({
            err: "Email id already registered. \
                  Continue to log in."
          });
      }
      return res.status(500)
      .json({
        err: "Username or password is invalid. "
      });
    }

    if(req.body.firstname){
        user.firstname = req.body.firstname;
    }

    if(req.body.lastname){
        user.lastname = req.body.lastname;
    }

    user.save(function(err, user) {
      passport.authenticate('local')(req, res, () => {
          return res.status(200).json({status: 'Continue to login'});
      });
    });

  }); 
});

// Login user
router.post('/login', function(req, res, next) {
  
  /**
   * An optional info argument will be passed, 
   * containing additional details provided by the strategy's verify callback.
   */
  passport.authenticate('local', function(err, user, info) {
    if(err){
      return next(err);
    }

    if(!user){
      return res.status(401).json({
          err: info
      });
    }

    // user will be assigned to req.user if login completes
    req.logIn(user, function(err) {
      if(err){
        return res.status(500).json({
            err: 'Could not log in user.'
        });
      }

      var token = Verify.getToken({
        "name": user.getName(),
        "username":user.username, 
        "_id":user._id, 
        "admin":user.admin
      });

      res.status(200).json({
        status: 'Login successful!',
        name: user.getName(),
        success: true,
        token: token,
        admin: user.admin,
        _id: user._id,
        email: user.email
      });
    });
  })(req, res, next); //on success req.user contains the authenticated user
});

// Update user
router.put('/edit/:uid', Verify.verifyOrdinaryUser, function(req, res, next) {
  User.findOneAndUpdate(
    {_id: req.decoded._id},
    {
      $set: {
        firstname: req.body.firstname, 
        lastname: req.body.lastname
      }
    }, {new: true}, function(err, user) {
      if (err) {
        res.status(500).json({
          err: "Couldn't connect to the database"
        });
      } else {
        res.status(200).json({
          msg: "User profile updated.",
          name: user.getName()
        });
      }
  });
});

// Get all groups belonging to a user
router.get('/myGroups', Verify.verifyOrdinaryUser, function(req, res, next) {
  User.findById(req.decoded._id, function(err, user) {
    if(err) {
      next(err);
      console.log(err);
    }
    groups = user.groups;
    console.log(user);
    res.status(200).json(groups);
  });
});

// Update user groups
router.put('/updateGroups', Verify.verifyOrdinaryUser, (req, res, next) => {
  if(req.body.checked) {
    User.findByIdAndUpdate(req.decoded._id, 
      {
        $addToSet: {
            groups: req.body.newGroup
        }
      },
      {new: true}, 
      (err, user) => {
        if(err) {
            next(err);
        }
        res.status(200).json({
          msg: `Subscribed to group ${req.body.newGroup}`,
          groups: user.groups
        });
    });
  } else {
    User.findByIdAndUpdate(req.decoded._id,
      {
        $pull: {
            groups: req.body.newGroup
        }
      },
      {new: true}, 
      (err, user) => {
        if(err) {
            next(err);
        }
        res.status(200).json({
          msg: `Unsubscribed from group ${req.body.newGroup}`,
          groups: user.groups
        });
    });
  }
});

// Logout user
router.get('/logout', function(req, res) {
  //removes the req.user property and clear the login session
  req.logout();
  res.status(200).json({
      status: 'Bye!'
  });
});

// Get all users
router.get('/getAll', Verify.verifyOrdinaryUser, Verify.verifyAdmin, function(req, res, next) {
  User.aggregate(
    [{
      $group: {
        _id: '$email'
      }
    }], (err, result) => {
      if(err) next(err);
      console.log(err);
      console.log(result);
      res.status(200).json(result);
    }
  );
});


// Get a user based on user id
router.get('/:uid', Verify.verifyOrdinaryUser, Verify.verifyAdmin, function(req, res, next) {
    User.findById(req.params.uid, (err, user) => {
        if (err) next(err);
        res.json(user);
    });
});


module.exports = router;
