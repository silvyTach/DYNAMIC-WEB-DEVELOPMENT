$(function(){
  //document ready
  alert("Document Ready");
    Comedies();
  });
function Comedies() {
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.themoviedb.org/3/discover/movie?with_genres=35&page=1&sort_by=popularity.desc&api_key=305a3b42d88760bd22c9f8c8c54f788d",
    "method": "GET",
    "headers": {},
    "data": "{}"
  }

$.ajax(settings).done(function (response) {
  var htmlstring = "<h2>Comedies <i>#Top5</i></h2><a href='library.html'>view all ></a>";
  for(var i=0; i<5; i++){
    html+= "<div class='poster-title'>"
    html+= "<img src='https://image.tmdb.org/t/p/original/" + response.results[i].poster_path +
      "' width = '261px' alt='" + response.results[i].title + " poster'>"
    html+= "<span>" + response.results[i].title + "</span>"
    html+= "<div class='imageInner'>"
    html+= '<span><a href="/movieshowinfo" class="poster-button" tabindex="-1">more details</a></span>'
    html+= "</div></div>"
    console.log(response.results[i].title);
    $('#comedy').html(htmlstring);
  }
});

}
