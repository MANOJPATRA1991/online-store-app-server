var express = require('express');
var router = express.Router();

var User = require('../models/User');

var Verify = require('./verify');

var passport = require('passport');
var bodyParser = require('body-parser');


// Register
router.post('/register', (req, res) => {

  // Create a new User instance
  let newUser = new User({
    username: req.body.username,
    email: req.body.email
  });

  // Register new user
  User.register(newUser, req.body.password, function(err, user){

    if(err){
      
      // Duplicate record  
      if(err.code === 11000){
          return res.status(500)
          .json({
            err: "Email id already registered. \
                  Continue to log in."
          });
      }
      console.log(err);
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

    user.save(function(err, user){
      passport.authenticate('local')(req, res, function(){
          return res.status(200).json({status: 'Continue to login'});
      });
    });

  }); 
})

// Login user
router.post('/login', function(req, res, next){
  
  /**
   * An optional info argument will be passed, 
   * containing additional details provided by the strategy's verify callback.
   */
  passport.authenticate('local', function(err, user, info){
    if(err){
      return next(err);
    }

    if(!user){
      return res.status(401).json({
          err: info
      });
    }

    // user will be assigned to req.user if login completes
    req.logIn(user, function(err){
      if(err){

        console.log(err);
        return res.status(500).json({
            err: 'Could not log in user.'
        });
      }

      console.log(User);

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
        isVerified: user.isVerified
      });
    });
  })(req, res, next); //on success req.user contains the authenticated user
})

// Update user
router.post('/edit/:uid', Verify.verifyOrdinaryUser, function(req, res, next){
  User.findOneAndUpdate(
    {_id: req.params.uid},
    {
      $set: {
        firstname: req.body.firstname, 
        lastname: req.body.lastname
      }
    }, (err, user) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          err: "Couldn't connect to the database"
        });
      } else {
        console.log(user);
        res.status(200).json({
          msg: "User profile updated."
        });
      }
  });
});

router.post('/updateGroup/:uid', Verify.verifyOrdinaryUser, (req, res, next) => {
  User.findOneAndUpdate(
    {_id: req.params.uid},
    {
      $push: {
        groups: req.body.newGroup
      }
    }, (err, user) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          err: "Couldn't connect to the database"
        });
      } else {
        console.log(user);
        res.status(200).json({
          msg: "Added new group " + req.body.newGroup
        });
      }
  });
});

// Logout user
router.get('/logout', function(req, res){
  //removes the req.user property and clear the login session
  req.logout();
  res.status(200).json({
      status: 'Bye!'
  });
});

module.exports = router;
