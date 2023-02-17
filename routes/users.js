var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/details', function(req, res, next) {
  res.send('This page will describe what is in order to expose more information');
});

module.exports = router;
