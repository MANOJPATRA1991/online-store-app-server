var express = require('express');
var path = require('path');

var favicon = require('serve-favicon');
var logger = require('morgan');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multer = require('multer');

// var expressHandlebars = require('express-handlebars');
// var expressValidator = require('express-validator');
var session = require('express-session');

// var flash = require('connect-flash');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var mongo = require('mongodb');
var mongoose = require('mongoose');

var cors = require('cors');

//requires the model with Passport-Local Mongoose plugged in
var User = require('./models/User');

var config = require('./config');

var index = require('./routes/index');
var users = require('./routes/users');
var uploads = require('./routes/upload');
var items = require('./routes/items');
var groups = require('./routes/groups');
var mail = require('./routes/mail');

mongoose.connect(config.mongoUrl);

var db = mongoose.connection;

//use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));

//use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));

app.use(bodyParser.json({limit:'50mb'})); 
app.use(bodyParser.urlencoded({extended:true, limit:'50mb'}));

app.use(cookieParser());

// Express session
app.use(session({
  secret: config.secretKey,
  saveUninitialized: true,
  resave: true
}));

// Passport initialization
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);
app.use('/users', users);
app.use('/upload', uploads);
app.use('/items', items);
app.use('/groups', groups);
app.use('/mail', mail);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(cors());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
