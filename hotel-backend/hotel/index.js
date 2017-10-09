
var express = require('express');
var app = express();
var router = express.Router();
var hotel = require('./controller');


router.get('/show-hotels/:hotel' , hotel.SearchAll);
router.get('/hotels' , hotel.MatchingHotels);


module.exports = router;