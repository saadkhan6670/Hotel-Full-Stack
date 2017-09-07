
var express = require('express');
var app = express();
var router = express.Router();
var hotel = require('./controller');


router.post('/show-hotels' , hotel.SearchAll);

module.exports = router;