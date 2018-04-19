$(function(){
  //document ready
  alert($('#title').html());
  omdb($('#title').html());
  // Top 5 Comedies
  });
function omdb(title) {
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "hhttp://www.omdbapi.com/?t=" + title+ "&plot=full&apikey=280e6eab",
    "method": "GET",
    "headers": {},
    "data": "{}"
  }
$.ajax(settings).done(function (response) {
  alert(response);
  $('#plot').html(response.Plot)
});

}
