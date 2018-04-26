$(function () {
	var searchString = document.location.search;
	pair = searchString.substring(1);
	var split = pair.split("=");
	var user = split[1];
	// var user = $("#user").html();
	//variable to save the user name so it can be passed via the url
	var length = $("#length").html();
	//variable to get number of movies in the user library

	//for each movie the movie id is acquired from the p tag with a certain id
	// the id is then used to fetch information from TMDB api
	//the p tag with that movie id is removed
	for (var i = 0; i < length; i++) {
		var id = $("#movie" + i).html();
		getInfo(id, user);
		$('#movie' + i).remove();
	}
	//the p tag with the number of movies in the user library is removed
	$('#length').remove();
  // $(".remove-user").forEach(function(tag) {tag.css("display", "none")});
  // $(".remove-movie").css("display", "none");
});

//Function that gets info from the API
function getInfo(id, user) {
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://api.themoviedb.org/3/movie/" + id + "?api_key=305a3b42d88760bd22c9f8c8c54f788d",
		"method": "GET",
		"headers": {},
		"data": "{}"
	}
	$.ajax(settings).done(function (response) {
		console.log(response);
		var html = "";
		html += '<div class="grid-20 mobile-grid-45 tablet-grid-45 grid-parent librarybox">'
		html += '<div class="grid-100 libraryimage"> <img class="poster" '
		html += "src='https://image.tmdb.org/t/p/w185" + response.poster_path + "' alt='" + response.title + " poster'></div>"
		html += '<div class="grid-100 librarytitle"><h4 class="title">' + response.title + "</h4></div>"
		html += '<div class="grid-100 librarybuttons"><a href="/movieshowinfo?user=' + user + '&id=' + response.id + '" class="button">More Details</a>'
    html += '<form action="/removeMovie" method="POST"><input class="remove-user" type="text" name="user" value="' + user + '" visibility="hidden">'
    html += '<input class="remove-movie" type="text" name="id" value="' + parseInt(id) + '" visibility="hidden"><button type="submit" class="button">Remove</button></form>'
		html += '</div></div>'
		$('#library').append(html);
	});
}
