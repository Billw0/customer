var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //throw new Error('Unknown error!');
  res.render('checkout', { title: 'Express' });
});

module.exports = router;
