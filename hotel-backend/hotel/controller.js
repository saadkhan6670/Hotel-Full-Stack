
var mongoose = require('mongoose');
var Hotels = mongoose.model('Hotels');
var boom = require('boom');

exports.SearchAll = function (req,res) {

    search = req.body.data;

    Hotels.find({'name' : {$regex: new RegExp('.*' + search+'.*', 'i')},is_active:true},
    function(err,data) {
                if(err){
                    res.send(err);
                }
                else{
                    console.log("data hit")
               res.send(data);
            }
        })


//     Hotels.find({},function (err,data) {
//         if(err){
//             res.send(err);
//         }
//         else{
//        res.send(data);
//         }
// })
}