var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'node-react-boilerplate' });
});

router.get('/test', function(req, res, next) {
  let basicService = require("services/basicService/serviceProvider").getBasicService();

  res.render('index', { title: basicService ? "Got Service" : "No Service" });
});

module.exports = router;
