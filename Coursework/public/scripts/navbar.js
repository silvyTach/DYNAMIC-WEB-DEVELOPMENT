$(function(){
  //document ready
  //alert("Document Ready");
  if(req.session.loggedin) change();
  });
  function change() {
    var li = $('navbar li a');
    li[1].html('My movies');
    li[1].href("/user");
    li[2].html('Sign out');
    li[2].href("/");
  }
