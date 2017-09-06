
var mongoose = require('mongoose');
var Hotels = mongoose.model('Hotels');
var boom = require('boom');

exports.SearchAll = function (req,res) {
    console.log("data hit")
    Hotels.find({},function (err,data) {
        if(err){
            res.send(err);
        }
        else{
       res.send(data);
        }
})
}