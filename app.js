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
  // sends 'people' back to the request
  res.send(people);
});

app.get('/likes', function(req, res) {
  // sends likesArray back to the request
  res.send(likesArray);
});


// hard coded posts
// app.post('/likes/PriscillaGyamfi', function(req, res) {
// //
//   likesArray[2].likes++;
//   res.sendStatus(200);
// });
//
// app.post('/likes/ScottFox', function(req, res) {
//   likesArray[0].likes++;
//   res.sendStatus(200);
// });
//
// app.post('/likes/BillKremer', function(req, res) {
//   likesArray[1].likes++;
//   res.sendStatus(200);
// });

// req.body for these three was = { BillKremer, ""}
// probably could refactor a bit more dynamically
// req.body.name could be used with some work...


// dynamic way to do it
app.post('/likes/:person', function (req, res) {
//    req.params.person = name  ( name is concatinated)
// console.log('req.params', req.params);

  likesArray.forEach( function (temp) {
    if (temp.name.split(" ").join("") ==  req.params.person) {
      temp.likes++;
    };
  });
  res.sendStatus(200);
});


app.listen(3000);
