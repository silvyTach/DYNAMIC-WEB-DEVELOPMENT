$(function(require) {
    var databaseUrl = "mongodb://localhost:27017/";
    var collections = ["users"];

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
    $("#user").val(user);
    $("#user").css("display", "none");
    $("#movie").css("display", "none");


    var db = require("mongojs").connect(databaseUrl, function(err, db) {
      if (err) throw err;
      var dbo = db.db("wheresmymovie");
      var query = {"login.username":user};
      dbo.collection("users").find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result.library);
        db.close();
      });
    })

  var id = $('#id').html();
  similarMovies(id, user);
  director(id);
  $('#id').remove();
  });

  function similarMovies(id, user) {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://api.themoviedb.org/3/movie/" + id + "/similar?page=1&api_key=305a3b42d88760bd22c9f8c8c54f788d",
      "method": "GET",
      "headers": {},
      "data": "{}"
    }
    $.ajax(settings).done(function (response) {
      console.log(response);
      var html = "";
      for(var i=0; i<3; i++){
        html+= '<tr><td><a href="/movieshowinfo?id=' + response.results[i].id + '&user=' + user +'">'
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
