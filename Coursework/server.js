var express = require('express');
var app = express();
//Loading the things we need

app.set('view engine', 'ejs');
//Setting the view engine to ejs

app.use(express.static('public'));
//Looking in the public folder for static files

//Using res.render to load up an ejs view file:

app.get('/', function(req, res) {
  res.render('pages/index');
  //Index page
});

app.get('/library', function(req, res) {
  res.render('pages/library');
  //Library page
});

app.get('/movieshowinfo', function(req, res) {
  res.render('pages/movieshowinfo');
  //Page to show info about a movie or show
});

app.get('/signuplogin', function(req, res) {
  res.render('pages/signuplogin');
  //Log in/sign up page
});

app.listen(8080);
//Telling the app to listen on port 8080
console.log('8080 is the magic port.');
//Displaying a message in the console
