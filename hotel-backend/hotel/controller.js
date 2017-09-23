
var mongoose = require('mongoose');
var Hotels = mongoose.model('Hotels');
var boom = require('boom');

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