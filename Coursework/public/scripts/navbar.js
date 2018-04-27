$(function(){
  //document ready
  //alert("Document Ready");
  var searchString = document.location.search;
  searchString = searchString.substring(1);
  //Checks if there is userinfo in the url

  // console.log("searchString " + searchString);
  
  // if thre is, the content of the navigation bar changes
  if(searchString != "") change();
  });

  function change() {
    $('#menu2').html('My movies');
    $('#menu2').attr("href", "/user");
    $('#menu3').html('Sign out');
    $('#menu3').attr("href", "/");
  }
