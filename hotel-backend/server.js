'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 5000;
var mongoose = require('mongoose');
var Hotels = require('./hotel/model');
var cors = require('cors');


//Connect to mongodb

mongoose.connect('mongodb://localhost/hotelDB', { useMongoClient: true}, (err) => {
    if(err){
        console.log(err);
    }
    else {
        console.log("MongoDB is now Connected")
    }
});

app.use(cors())

//body parser middleware
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use('/hotel', require('./hotel'));

app.listen(port, function () {
    console.log('Running server on ' + port);
});

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send("Error: "+ err.message);
});