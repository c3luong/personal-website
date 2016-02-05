'use strict';
var webpack = require('webpack'),
    path = require('path');

// PATHS
var PATHS = {
    app: __dirname + '/src',
    pub: __dirname + '/public',
    node: __dirname + '/node_modules'
};

module.exports = {
    context: PATHS.app,
    devtool: 'source-map',
    entry: './entry.js',
    output: {
        path: PATHS.pub,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.less$/,
            loader: 'style!css!less'
        }, {
            test: /\.js$/,
            loader: 'ng-annotate!babel?presets[]=es2015!jshint',
            exclude: /node_modules|bower_components/
        }]
    },
    plugins: [
    ]
};
