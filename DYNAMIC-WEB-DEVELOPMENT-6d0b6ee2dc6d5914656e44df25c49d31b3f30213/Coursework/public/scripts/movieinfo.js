$(function() {
    var searchString = document.location.search;
    searchString = searchString.substring(1);
    var nvPairs = searchString.split("&");
    var user;
    for (var i = 0; i < nvPairs.length; i++) {
        var nvPair = nvPairs[i].split("=");
        var name = nvPair[0];
        if (name == "user") {
            user = nvPair[1];
            break;
        }
    }
    // extracting the username from the url so we can pass it on to other pages

    $("#user").val(user);
    $("#user").css("display", "none");
    $("#movie").css("display", "none");
    // these two are input tags when adding a movie to a user's collection
    // the username is needed to find the right user in the database
    // the movie id is added in that user's library in the database
    // the fields are invisible

    var id = $('#id').html();
    // saving the movie id in a variable so we can pass it to the function below
    // finding similar movies
    similarMovies(id, user);

    // finding the movie director
    director(id);

    $('#id').remove();
    // removing the element containing the movie id as it is not needed anymore
});
// this function finds 3 movies similar to the one the user is currently viewing
// the function uses the movie id
// the username is supplied so it can be passed in the url to other pages
function similarMovies(id, user) {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.themoviedb.org/3/movie/" + id + "/similar?page=1&api_key=305a3b42d88760bd22c9f8c8c54f788d",
        "method": "GET",
        "headers": {},
        "data": "{}"
    }
    $.ajax(settings).done(function(response) {
        console.log(response);
        var html = "";
        for (var i = 0; i < 3; i++) {
            html += '<tr><td><a href="/movieshowinfo?id=' + response.results[i].id + '&user=' + user + '">'
            html += "<img src='https://image.tmdb.org/t/p/w154" + response.results[i].poster_path + "' alt='" + response.results[i].title + " poster'></a></td><td>"
            html += "<h1>" + response.results[i].title + "</h1>"

            html += '<p class="l-items">⭐️ ' + response.results[i].vote_average + '<i> /10</i></p>'
            html += '<p class="l-items">Release Date: ' + response.results[i].release_date + ' </p>'
            html += '<p>' + response.results[i].overview + ' </p></td></tr>'
        }
        $('#similar table').html(html);
    });
}

// this function finds the name of the movivie Director
// it's needed because in order to find crew information we need to make additional query to the API
function director(id) {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.themoviedb.org/3/movie/" + id + "/credits?api_key=305a3b42d88760bd22c9f8c8c54f788d",
        "method": "GET",
        "headers": {},
        "data": "{}"
    }

    $.ajax(settings).done(function(response) {
        console.log(response.crew[0].name);
        $('#director').html(response.crew[0].name);
    });
}
