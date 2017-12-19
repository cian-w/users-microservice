var express     = require('express');
var app         = express();
var data        = require('./src/scripts/data');
var http        = require('http');
var request     = require('request');
var bodyParser  = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Route used when loggin in
app.post('/login', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");

    // Parse the username and password
    var userDetails = JSON.parse(Object.keys(req.body)[0]);

    // Check with database for user credentials
    data.loginUser(userDetails, function (result) {
        res.send(result);
    });
});


app.listen(8081, function () {
  console.log('Users service is running on port 8081!');
});
