var http = require('http');
var fs = require('fs');
var url = require('url');
var express = require('express');

const PORT=3001;

var app = express();

app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
  res.sendFile( __dirname + "/" + "index.html" );
});

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})
