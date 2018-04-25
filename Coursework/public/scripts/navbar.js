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
  if(user != "undefined") {
    change();
    console.log("user");
  }
  });
  function change() {
    $('#menu2').html('My movies');
    $('#menu2').attr("href", "/user");
    $('#menu3').html('Sign out');
    $('#menu3').attr("href", "/");
  }
