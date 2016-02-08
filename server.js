var express = require('express');
var app = express();
var morgan = require('morgan');             // log requests to the console (express4)

app.use(require('prerender-node').set('prerenderServiceUrl', 'http://localhost:3000'));

app.use('/public', express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
app.use('/components', express.static(__dirname + '/public/components'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.use(morgan('dev')); // log every request to the console

app.all('/*', function(req, res) {
    res.sendFile('/public/index.html', { root: __dirname });
});
app.get('/', function (req, res) {
    res.sendFile('/public/index.html');
});


app.listen(80);
console.log("App listening on port 80");
