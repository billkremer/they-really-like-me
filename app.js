var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var people = require('./routes/data.json');

var likesArray = [{name: 'Scott Fox', likes: 1},
                  {name: 'Bill Kremer', likes: 2},
                  {name: 'Priscilla Gyamfi', likes: 3}];




var app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.get('/bios', function(req, res) {
  res.send(people);
});

app.get('/likes', function(req, res) {
  res.send(likesArray);
});

// app.post('/likes'), function(req, res) {
//
// }

app.post('/likes/Priscilla', function(req, res) {
  likesArray[2].likes++;
  console.log(likesArray[2].likes+ 'plikes');
});

app.post('/likes/Scott', function(req, res) {
  likesArray[0].likes++;
  console.log(likesArray[0].likes+ 'slikes');
});

app.post('/likes/Bill', function(req, res) {
  likesArray[1].likes++;
  console.log(likesArray[1].likes + 'billlikes');
});



app.listen(3000);
