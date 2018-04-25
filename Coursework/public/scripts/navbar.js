$(function(){
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
  //document ready
  //alert("Document Ready");
  var searchString = document.location.search;
  searchString = searchString.substring(1);
  var nvPairs = searchString.split("&");
  var user;
  for (var i = 0; i < nvPairs.length; i++) {
    var nvPair = nvPairs[i].split("=");
    var name = nvPair[0];
    if(name == "user") {
      user = nvPair[1];
      break;
    }
  }
  console.log("user: " + user);
  db.collection('users').findOne({"login.username":user}, function(err, result) {
    if(!result) { console.log('no user');}
    else {change();}
  });
  console.log("user");
  });

  function change() {
    $('#menu2').html('My movies');
    $('#menu2').attr("href", "/user");
    $('#menu3').html('Sign out');
    $('#menu3').attr("href", "/");
  }
