$(function(){
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
  
  if(user != "") change();
  });
  function change() {
    var li = $('navbar li a');
    li[1].html('My movies');
    li[1].href("/user");
    li[2].html('Sign out');
    li[2].href("/");
  }


  //grab the url in the location bar
  var searchString = document.location.search;

  //strip off the heading '?'
  searchString = searchString.substring(1);

  //split string of arguments into name=value pairs
  var nvPairs = searchString.split("&");

  //iterate through name=value pairs
  //split into separate name and value
  //print to the browser console
  for (var i = 0; i < nvPairs.length; i++) {
    var nvPair = nvPairs[i].split("=");
    var name = nvPair[0];
    var value = nvPair[1];
    console.log("argument name="+name+" and value="+value);
  }
