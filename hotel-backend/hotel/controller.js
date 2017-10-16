var mongoose = require('mongoose');
var Hotels = mongoose.model('Hotels');
var boom = require('boom');
var Hotel_Data = require('../Hotel_Data')
var resources = require('../resources')


exports.SearchAll = function (req, res) {

    let search = req.params.hotel;

    Hotels.find({ 'name': { $regex: search, $options: 'i' } } , (err,data) => {
        if(err) {
            res.send(err)
        }
        else{
            res.send(data);
        }
    })
};

exports.MatchingHotels = function (req, res) {
       
                res.send(Hotel_Data.hotel);
    };

exports.HotelFilters = function (req, res) {

    res.send(resources.filters);
}; 