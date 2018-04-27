$(function(){
  //document ready
  alert("Document Ready");
    getResultsFromOMDB();
  });
function getResultsFromOMDB() {
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.themoviedb.org/3/movie/popular?api_key=305a3b42d88760bd22c9f8c8c54f788d",
  "method": "GET",
  "headers": {},
  "data": "{}"
}

$.ajax(settings).done(function (response) {
  var htmlstring = "";
  for(var i=0; i<5; i++){
    var title = response.results[i].title;
    htmlstring+= "<li>" + title + "</li>";
  }
  $('#resultsbox').html(htmlstring);
});
}
