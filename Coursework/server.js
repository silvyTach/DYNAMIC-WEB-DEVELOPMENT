const MongoClient = require('mongodb').MongoClient; //npm install mongodb@2.2.32
const url = "mongodb://localhost:27017/wheresmymovie";
const express = require('express'); //npm install express
const session = require('express-session'); //npm install express-session
const bodyParser = require('body-parser'); //npm install body-parser
const app = express();
const unirest = require("unirest"); // npm install unirest
//Loading the things we need

app.set('view engine', 'ejs');
//Setting the view engine to ejs
app.use(bodyParser.urlencoded({
  extended: true
  //Using the body-parser for post data
}));
app.use(express.static('public'));
//Looking in the public folder for static files
app.use(session({
  secret: 'example'
  //Telling express we're using sessions
}));
var db;
//Variable to store the database

MongoClient.connect(url, function(error, database) {
  if (error) {
    throw error;
    //If there's an error, throw it
  }
  db = database;
  //Storing the database in the variable
  app.listen(8080);
  //Telling the app to listen on port 8080
  console.log('8080 is the magic port.');
  //Displaying a message in the console
});

//-------------------- GET ROUTES --------------------

//Using res.render to load up an ejs view file:

//Index page
app.get('/', function(req, res) {
   //res.render('pages/index');
  var req = unirest("GET", "https://api.themoviedb.org/3/movie/popular");
  req.query({
    "api_key": "305a3b42d88760bd22c9f8c8c54f788d"
  });
  req.send("{}");
  req.end(function (result) {
    if (result.error) throw new Error(result.error);
    res.render('pages/index', {
      index: result.body.results
    });
  });
});

app.get('/library', function(req, res) {
  if (!req.session.loggedin) {
    res.redirect('/signuplogin');
    return;
    //If the user isn't logged in, they can't reach their library page
  }
  res.render('pages/library');
  //Library page
});

//Movie info page
app.get('/movieshowinfo', function(req, res) {
  var id = req.query.id;
  console.log(id);
  //this query finds the id of the movie that will be shown on the next page.
  var req = unirest("GET", "https://api.themoviedb.org/3/movie/" + id);
  req.query({
    "append_to_response": "credits",
    "api_key": "305a3b42d88760bd22c9f8c8c54f788d"
  });
  req.send("{}");
  req.end(function (result) {
    if (result.error) throw new Error(result.error);
    console.log(result.body.original_title);
    res.render('pages/movieshowinfo', {
      movie: result.body
    });
  });
});

app.get('/signuplogin', function(req, res) {
  res.render('pages/signuplogin');
  //Log in/sign up page
});

app.get('/user', function(req, res) {
  var user = req.query.user;
  console.log(user);
  //this query finds the first document in the array with that username.
  //Because the username value sits in the login section of the user data we use login.username
  db.collection('users').findOne({
    "login.username": user
  }, function(err, result) {
    if (err) throw err;
    //finally we just send the result to the user page as "user"
    res.render('pages/user', {
      user: result
    })
  });
});

app.get('/search', function(req, res) {
  res.render('pages/search');
  //Log in/sign up page
});

app.get('/addtolibrary', function(req, res) {
  var id = req.query.id;
  console.log(id);
  //Finding the ID of the movie to be add to the Library
  db.collection('users').findOne({"login.username":"testuser"}, function(error, result) {
    if (error) {
      throw error;
      //If there's an error, throw it
    }

    if (!result) {
      res.redirect('/signuplogin');
      return;
    }

    //Still need to find the user's library based on their username and then add the id to their library
    //Then redirect user to library with their username

  });
});

//-------------------- POST ROUTES --------------------

//this is our login route, all it does is render the login.ejs page.
app.post('/login', function(req, res) {
  //console.log(JSON.stringify(req.body))
  var uname = req.body.username;
  var pword = req.body.password;
  // Getting the username and password entered by the user
  db.collection('users').findOne({"login.username":uname}, function(err, result) {
    if (err) throw err;//if there is an error, throw the error
    //if there is no result, redirect the user back to the login system as that username must not exist
    if(!result){res.redirect('/signuplogin');return}
    //if there is a result then check the password, if the password is correct set session loggedin to true and send the user to their library
    if(result.login.password == pword){ req.session.loggedin = true; res.redirect('/user?user=' + result.login.username)}
    //otherwise send them back to login
    else{res.redirect('/signuplogin')}
  });
});

//this is our signup route, adds new user to the db and draws the home page
app.post('/signup', function(req, res) {
  console.log(JSON.stringify(req.body));
  var password = true;
  if (req.body.password != req.body.password2 || req.body.password == "") password = false;
  // checking if the passwords match and if both fields are filled out
  var email = true;
  if (req.body.email != req.body.email2 || req.body.email == "") email = false;
  // checking if the emails match and if both fields are filled out
  var uname = true;
  if(db.collection('users').find({"login.username": req.body.username}).count() > 0 || req.body.username == "") uname = false;
  // checking if the username already exists in the db and if the field is filled out
  if(!(email) || !(password) || !(uname)) res.redirect('/signuplogin');
  // if any of the conditions is false the user is redirected back to the signup page
  // and is not added to the db, else the signup procedure continues
  else {
    var userData = {email: req.body.email, login: {username: req.body.username, password: req.body.password}, library: {}, img: req.body.img};
    db.collection('users').insert(userData, function(err, result) {
      if(err) throw "Error! New user was not added to the database!"
      if(!result) {res.redirect('signuplogin');return}
      else {req.session.loggedin = true; res.redirect('/?user=' + req.body.username)}
      //if there are no errors the user is added to the db and the home page is drawn
    })
  }
});

app.post('/addMovie', function(req, res) {
  var query = { login.username: req.body.user };
  var newvalues = { $push: {library: req.body.id} };
  db.collection('quotes').updateOne(query,newvalues, function(err, result) {
    if (err) throw err;
    console.log("added movie" + req.body.id + " to " + req.body.user);
    res.redirect('/');
  });
});
