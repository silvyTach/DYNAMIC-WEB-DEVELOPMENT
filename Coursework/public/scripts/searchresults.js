$(function (){
//Function will run when the page is loaded
    //alert(window.location.search.substr(8).slice(0, -8));
    //The document is ready

    var queryString = window.location.search.substr(8).slice(0, -8);
    //The URL is stored with the leading ?search= and ending &x=...&y=... removed
    var searchTerms = queryString.split("+");
    //The elements are split into an array for reformatting
    //console.log(searchTerms);
    var searchString = "";
    //An empty String set up for holding the formatted search String
    for (var i = 0; i < searchTerms.length; i++) {
      searchString += searchTerms[i] + " ";
      //Formatting the search String
    }
    console.log(searchString);
    getResults(searchTerms);
    //Calling the function with the search terms as the parameter
    return false;
    //Preventing the page from reloading
});

function getResults(searchTerms) {
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.themoviedb.org/3/search/movie?api_key=305a3b42d88760bd22c9f8c8c54f788d&language=en-US&query=" + searchTerms + "&include_adult=false",
    "method": "GET",
    "headers": {},
    "data": "{}"
  }

  $.ajax(settings).done(function (response) {
    console.log(response);
    var htmlstring = '';
    if (response) {
      for(var i = 0; i < response.results.length; i++){
        htmlstring += '<div class="grid-100 grid-parent result">' + '\n';
        htmlstring += '  <div class="grid-80">' + '\n';
        htmlstring += '    <div class="text">' + '\n';
        htmlstring += '      <h1 class="title">' + response.results[i].title + '</h1>' + '\n';
        htmlstring += '      <ul class="info">' + '\n';
        htmlstring += '        <li class="rating">⭐️ ' + response.results[i].vote_average + ' <i> /10</i></li>' + '\n';
        htmlstring += '      </ul>' + '\n';
        htmlstring += '    </div>' + '\n';
        htmlstring += '    <div class="moredetails">' + '\n';
        htmlstring += '      <a href="/movieshowinfo?id=' + response.results[i].id +'" class="button">More Details</a>' + '\n';
        htmlstring += '    </div>' + '\n';
        htmlstring += '  </div>' + '\n';
        htmlstring += '\n';
        htmlstring += '  <div class="grid-20">' + '\n';
        htmlstring += '    <img class="poster" src="https://image.tmdb.org/t/p/original/' + response.results[i].poster_path + '" alt="Poster">' + '\n';
        htmlstring += '  </div>' + '\n';
        htmlstring += '</div>' + '\n';
        htmlstring += '\n';
        //Iteratng over the collection of results
      }
    } else {
      htmlstring += '<div class="grid-100" id="errormessage">\n';
      htmlstring += '  <h1 class="title">Oops!</h1>\n';
      htmlstring += "  <p>We couldn't find anything with that in the title. Please try again with a different search term.</p>\n";
      htmlstring += '</div>\n';
      //Creating an error message if no data is returned
    }

    $('#results').html(htmlstring);
    //Injecting the HTML into the empty container

  });
}
