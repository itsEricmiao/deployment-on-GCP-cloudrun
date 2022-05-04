var express = require('express');
var app = express();

var port = process.env.PORT || 8080
var ENV_TEST = process.env.ENV_TEST || "ENV_TEST is unset"
var SECRET_TEST = process.env.SECRET_TEST || "SECRET_TEST is unset"

app.get('/', function (req, res) {
    res.sendfile('index.html');
});

app.listen(port);

console.log('Hello World: This is a sample testing file for Deployment on GCP CloudRun' + port);

console.log('Value of ENV_TEST:' + ENV_TEST);
console.log('Value of SECRET_TEST:' + SECRET_TEST);
