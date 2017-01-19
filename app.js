var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var people = require('./routes/data.json'); // need to update

var app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.get('/bios', function(req, res) {
  res.send(people);
});



app.listen(3000);
