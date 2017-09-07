
var mongoose = require('mongoose');
var Hotels = mongoose.model('Hotels');
var boom = require('boom');

exports.SearchAll = function (req, res) {

    let search = req.params.hotel;

    Hotels.find().or([{ 'name': { $regex: search, $options: 'i' } }]).exec(function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            console.log("data hit")
            res.send(data);
        }
    })
};