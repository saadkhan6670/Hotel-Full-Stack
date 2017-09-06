'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var validate = require('mongoose-validator');

// var emailValidate =[
//     validate({
//         validator : 'matches',
//         arguments:/^[\w.]+[@]+[a-zA-Z]+.com$/,
//         message:'Invalid Email'
//     })
// ];

var HotelSchema = new Schema ({
    name : { type: String },
    name_en : { type: String },
    hotelCount : { type: Number },
    displayType : {type: String },
    countryCode : { type: String },
    hotelId : {type:String},

});

module.exports = mongoose.model('Hotels', HotelSchema);