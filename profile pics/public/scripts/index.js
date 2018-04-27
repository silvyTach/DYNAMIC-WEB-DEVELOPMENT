$(function(){
  //document ready
  //alert("Document Ready");

  // Top 5 Comedies
    top5(35, "Comedy");
    // Top 5 Action
      top5(28, "Action");
      // Top 5 Romance
        top5(10749, "Romance");
        // Top 5 Crine
          top5(80, "Crime");
  });
function top5(id, genre) {
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.themoviedb.org/3/discover/movie?with_genres=" + id+ "&page=1&sort_by=popularity.desc&api_key=305a3b42d88760bd22c9f8c8c54f788d",
    "method": "GET",
    "headers": {},
    "data": "{}"
  }

$.ajax(settings).done(function (response) {
  var html = '<div class="top"><h2>' + genre + ' <i>#Top5</i></h2><a href="/library">view all ></a></div>';
  for(var i=0; i<5; i++){
    html+= "<div class='poster-title'>"
    html+= "<img src='https://image.tmdb.org/t/p/original/" + response.results[i].poster_path +
      "' width = '261px' alt='" + response.results[i].title + " poster'>"
    html+= "<span>" + response.results[i].title + "</span>"
    html+= "<div class='imageInner'>"
    html+= '<span><a href="/movieshowinfo?id=' + response.results[i].id +'" class="poster-button" tabindex="-1">more details</a></span>'
    html+= "</div></div>"
    // console.log(response.results[i].title);
    $("#" + genre).html(html);
  }
});

}
