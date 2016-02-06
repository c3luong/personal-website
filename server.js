var express = require('express');
var app = express();
var morgan = require('morgan');             // log requests to the console (express4)

//var mongoose = require('mongoose');
//mongoose.connect('mongodb://node:nodeuser@mongo.onmodulus.net:27017/uwO3mypu'); // connect to mongoDB database on modulus.io

app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
app.use(morgan('dev')); // log every request to the console
app.use(require('prerender-node'));



app.listen(80);
console.log("App listening on port 8080");
