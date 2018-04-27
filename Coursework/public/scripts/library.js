$(function() {
  var p = $(".tab p").toArray();

  for (var i = 0; i < p.length; i++) {
    // console.log($(p[i]).html());
    var id = $(p[i]).html();
    p[i].remove();
    var name = $("#b" + id).html().substring(1);
    // console.log(id + " : " + name);
    genre(id, name);
  }
    // Top 5 Comedies
    // top5(35, "Comedy");
});

function genre(id, name) {
  var settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://api.themoviedb.org/3/discover/movie?with_genres=" + id + "&page=1&sort_by=popularity.desc&api_key=305a3b42d88760bd22c9f8c8c54f788d",
          "method": "GET",
          "headers": {},
          "data": "{}"
      }
    $.ajax(settings).done(function(response) {
        var html = "";
        for (var i = 0; i < response.results.length; i++) {
            html += '<div class="grid-20 mobile-grid-45 tablet-grid-45 grid-parent librarybox">'
            html += '<div class="grid-100 libraryimage">'
            html += '<img class="poster" src="https://image.tmdb.org/t/p/original/' + response.results[i].poster_path + '" '
            html += 'alt="Poster"></div>'
            html += '<div class="grid-100 librarytitle">'
            html += '<h4 class="title">' + response.results[i].title + '</h4></div>'
            html += '<div class="grid-100 librarybuttons">'
            html += '<button class="button">More Details</button>'
            html += "</div></div>"
            $("#" + id).html(html);
        }
    });
}
