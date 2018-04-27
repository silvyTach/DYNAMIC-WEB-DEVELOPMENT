$(function() {
  $(".tab p").forEach(function(p){
    var id = p.html();
    var name = $("#g" + id).html();
    console.log(id + " : " + name);
    p.remove();
  })



    // Top 5 Comedies
    // top5(35, "Comedy");
});

// function top5(id, genre) {
//     var settings = {
//         "async": true,
//         "crossDomain": true,
//         "url": "https://api.themoviedb.org/3/discover/movie?with_genres=" + id + "&page=1&sort_by=popularity.desc&api_key=305a3b42d88760bd22c9f8c8c54f788d",
//         "method": "GET",
//         "headers": {},
//         "data": "{}"
//     }
//     $.ajax(settings).done(function(response) {
//         var html = '<div class="top"><h2>' + genre + ' <i>#Top5</i></h2><a href="/library">view all ></a></div>';
//         for (var i = 0; i < 5; i++) {
//             html += "<div class='poster-title'>"
//             html += "<img src='https://image.tmdb.org/t/p/original/" + response.results[i].poster_path +
//                 "' width = '261px' alt='" + response.results[i].title + " poster'>"
//             html += "<span>" + response.results[i].title + "</span>"
//             html += "<div class='imageInner'>"
//             html += '<span><a href="/movieshowinfo?user=' + user + '&id=' + response.results[i].id + '" class="poster-button" tabindex="-1">more details</a></span>'
//             html += "</div></div>"
//                 console.log(response.results[i].title);
//             $("#" + genre).html(html);
//         }
//     });
//
// }
