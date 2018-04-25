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
    $('#menu2').html('My movies');
    $('#menu2').href("/user");
    $('#menu3').html('Sign out');
    $('#menu3').href("/");
  }
