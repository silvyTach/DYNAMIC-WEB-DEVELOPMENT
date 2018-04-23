$(function(){
  //document ready
  //alert("Document Ready");
  var id = $('#id').html();
  similarMovies(id);
  director(id);
  $('#id').remove();
  });

  function similarMovies(id) {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://api.themoviedb.org/3/movie/" + id + "/similar?page=1&api_key=305a3b42d88760bd22c9f8c8c54f788d",
      "method": "GET",
      "headers": {},
      "data": "{}"
    }
    $.ajax(settings).done(function (response) {
      var html = "";
      for(var i=0; i<3; i++){
        html+= '<tr><td><a href="/movieshowinfo?id=' + response.results[i].id + '">'
        html+= "<img src='https://image.tmdb.org/t/p/w154" + response.results[i].poster_path + "' alt='" + response.results[i].title + " poster'></a></td><td>"
        html+= "<h1>" + response.results[i].title + "</h1>"

        html+= '<p class="l-items">⭐️ ' + response.results[i].vote_average + '<i> /10</i></p>'
        html+= '<p class="l-items">Release Date: ' + response.results[i].release_date + ' </p>'
        html+= '<p>' + response.results[i].overview + ' </p></td></tr>'
      }
      $('#similar table').html(html);
    });
  }

  function director(id) {
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.themoviedb.org/3/movie/" + id + "/credits?api_key=305a3b42d88760bd22c9f8c8c54f788d",
  "method": "GET",
  "headers": {},
  "data": "{}"
}

$.ajax(settings).done(function (response) {
  console.log(response.crew[0].name);
  $('#director').html(response.crew[0].name);
});
}
