
var mongoose = require('mongoose');
var Hotels = mongoose.model('Hotels');
var boom = require('boom');

exports.SearchAll = function (req,res) {
    console.log("data hit")

    Hotels.find({name : {$regex: new RegExp('.*' + search.toLowerCase()+'.*', 'i')},name : {$regex: new RegExp('.*' + search.toUpperCase()+'.*','i')},is_active:true},
    function(err,data) { 
        console.log(data); 
    });


//     Hotels.find({},function (err,data) {
//         if(err){
//             res.send(err);
//         }
//         else{
//        res.send(data);
//         }
// })
}