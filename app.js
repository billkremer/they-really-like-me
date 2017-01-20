var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var people = require('./routes/data.json');

var likesArray = [{name: 'Scott Fox', likes: 0},
                  {name: 'Bill Kremer', likes: 0},
                  {name: 'Priscilla Gyamfi', likes: 0}];



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


// hard coded posts
app.post('/likes/PriscillaGyamfi', function(req, res) {
  likesArray[2].likes++;
  res.sendStatus(200);
});

app.post('/likes/ScottFox', function(req, res) {
  likesArray[0].likes++;
  res.sendStatus(200);
});

app.post('/likes/BillKremer', function(req, res) {
  likesArray[1].likes++;
  res.sendStatus(200);
});


app.listen(3000);
