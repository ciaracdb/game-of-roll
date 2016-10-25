var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Game Of Roll' });
});

router.get('/test', function(req, res, next) {
  res.render('test', { title: 'Game Of Roll' });
});

module.exports = router;
