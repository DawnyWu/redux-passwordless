var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var expressSession = require('express-session');
var MongoSessionStore = require('connect-mongo')(expressSession);
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passwordless = require('passwordless');
var MongoStore = require('passwordless-mongostore');
var email   = require("emailjs");
var routes = require('./routes/index');
var nconf = require('nconf');
// var mongoose = require('mongoose');
var router = express.Router();

var app = express();

nconf.file({ file: './config.json' });

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Request-Headers", "*");
//   res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//   res.header("Access-Control-Allow-Credentials", "true");
//   next();
// });

var yourEmail = nconf.get('email');
var yourPwd = nconf.get('password');
var yourSmtp = nconf.get('smtp'); 
var smtpServer  = email.server.connect({
   user:    yourEmail, 
   password: yourPwd, 
   host:    yourSmtp, 
   ssl:     true
});
console.log(nconf.get('email'))
console.log(nconf.get('password'))
console.log(nconf.get('smtp'))

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressSession({secret: '42', cookie: { maxAge: 1000*60*60*24 }, 
                        saveUninitialized: false, resave: true,
                        store: new MongoSessionStore({url: 'mongodb://localhost/redux_passwordless_session'})
                        }));

var pathToMongoDb = 'mongodb://localhost/redux_passwordless';

// TODO: Path to be send via email
if(process.env.NODE_ENV === 'production'){
  var host = 'http://103.253.146.179:3006/'
}else{
  var host = 'http://localhost:3006/';
}

// Setup of Passwordless
passwordless.init(new MongoStore(pathToMongoDb));
passwordless.addDelivery(
    function(tokenToSend, uidToSend, recipient, callback) {
        // Send out token
        smtpServer.send({
           text:    'Hello!\nYou can now access your account here: ' 
                + host + '?token=' + tokenToSend + '&uid=' + encodeURIComponent(uidToSend), 
           from:    yourEmail, 
           to:      recipient,
           subject: 'Token for ' + host
        }, function(err, message) { 
            if(err) {
                console.log(err);
            }
            callback(err);
        });
    });



app.use(passwordless.sessionSupport());
app.use(passwordless.acceptToken({ successRedirect: '/' }));

app.use('/api/', routes);

var staticPath = "public"
app.use('/', express.static(staticPath));




// error handlers
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  console.dir(err);
  res.status(err.status || 500);
  if(err.status === 500) {
    res.json({error: 'Internal Server Error: '+ err.message});
  }
  else if(err.status === 404) {
    res.render('error');    //render error page
  } else {
    res.json({error: err.message})
  }
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
module.exports = app;