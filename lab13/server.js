var express = require('express');
var knockknock = require('knock-knock-jokes');
var app = express();
app.get('/', function(req, res){
 res.send("Hello world! by express");
});

app.get('/test', function(req, res){
 res.send("this is route 2");
});

app.get('/joke', function(req, res){
    var randomJoke = knockknock()
    res.send(randomJoke);
});
app.listen(8080);

app.get('/add', function(req, res){
var x = parseInt(req.query.x);
var y = parseInt(req.query.y);
 res.send("X + Y="+(x+y));
});

app.get('/calc', function(req, res){
var x = parseInt(req.query.x);
var y = parseInt(req.query.y);
var mul = req.query.mul;
var sub = req.query.sub;
    var div = req.query.div;
    var add = req.query.add;
var resp = ""
if(mul == "") {
 resp = "X x Y="+(x*y); 
}
if(add == "") {
 resp = "X + Y="+(x+y); 
}
if(sub == "") {
 resp = "X - Y="+(x-y); 
}
if(div == "") {
 resp = "X / Y="+(x/y); 
}
    res.send(resp); 
});

app.use(express.static('public'));

app.get('/getform', function(req, res){
var name = req.query.name;
var quest = req.query.quest;
 res.send("Hi "+name+" I am sure you will "+quest) ;
});