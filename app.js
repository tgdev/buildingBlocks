'use strict';

var express = require('express');
var app = express();

// app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.send('Hello yall');
});

module.exports = app;