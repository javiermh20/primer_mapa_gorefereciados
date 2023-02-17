var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Campus site & Maps' });
});

router.get('/about', function(req, res, next) {
  res.send("This page will describe what is this site about.")
});

router.get('/gotusers', function(req, res, next) {
  res.send("/users")
});

router.get('/gmap', function(req, res, next) {
  res.render('gmap', { title: 'Google Maps' });
});

module.exports = router;
