var express = require('express');
var router = express.Router();
var axios = require('axios');
var passwordless = require('passwordless');
var querystring = require('querystring')
// var passwordless = require('../../../');


/* GET home page. */
// router.get('/', function(req, res) {
//   res.render('index', { user: req.user });
// });

/* GET restricted site. */
router.get('/restricted', passwordless.restricted(),
 function(req, res) {
  res.render('restricted', { user: req.user });
});

/* GET login screen. */
router.get('/login', function(req, res) {
  console.log("User: " + req.user)
  console.log("env:" + JSON.stringify(process.env.NODE_ENV))
  console.log("host:" + req.hostname)

  res.redirect('/');
});

/* GET logout. */
router.get('/logout', passwordless.logout(),
  function(req, res) {
  res.redirect('/');
});

router.get('/githubToken', function (req, res) {
  var client_id = 'a4a062caf4edbc424290'
  var client_secret = '757d24da7beb8b5049738ab690607ea639c03898'  
  var code = req.query.code

  var access_token
  axios.post('https://github.com/login/oauth/access_token',
    {code: code, client_id: client_id, client_secret: client_secret})
  .then(function (response) {
    access_token = querystring.parse(response.data).access_token
    console.log('parse access_token:'+JSON.stringify(querystring.parse(response.data)));
    res.json({
      access_token: access_token
    })
  })
})

/* POST login screen. */
router.post('/sendtoken', 
  passwordless.requestToken(
    // Simply accept every user
    function(user, delivery, callback) {
      callback(null, user);
      // usually you would want something like:
      // User.find({email: user}, callback(ret) {
      //    if(ret)
      //      callback(null, ret.id)
      //    else
      //      callback(null, null)
      // })
    }),
  function(req, res) {
      // res.json('success');
      // res.render('sent')
      res.json({
        error: "wuzhaoyang@gmail.com"
      })
}
);

/* GET login screen. */
router.get('/check_user', function(req, res) {
  console.log("User: "+req.user)
  // res.render('login', { user: req.user });
  user = req.user
  if(user){
    res.status(200).json({
      user: user
    })    
  }else{
    res.status(200).json({
      user: user
    })
  }
});

router.get('/destory_session', function(req, res){
  req.session.destroy(function(err) {
    res.status(200).json({})
  })
})


module.exports = router;