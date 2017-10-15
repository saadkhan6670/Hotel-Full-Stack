
var express = require('express');
var app = express();
var router = express.Router();
var hotel = require('./controller');


router.get('/show-hotels/:hotel' , hotel.SearchAll);
router.get('/matched-hotels' , hotel.MatchingHotels);
router.get('/hotel-filters' , hotel.HotelFilters);



module.exports = router;