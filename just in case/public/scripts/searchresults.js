$(function (){
//Function will run when the page is loaded
    //alert("Document is ready.");
    //The document is ready

    $('#search').submit(function() {
    //Tying a listener to the submit event of the search bar
      var searchTerms = $('#searchBox').val();
      //Getting the item in the search term box
      console.log("Search term:" + searchTerms);
      //Calling the function with the search terms as the parameter
      getResultsFromOMDb(searchTerms);
      //Calling the function with the search terms as the parameter
      return false;
      //Preventing the page from reloading
    });
});

function getResultsFromOMDb(searchTerms) {
  var url = "http://www.omdbapi.com/?i=tt3896198&apikey=32c3c53&s=" + searchTerms;
  //Building the URL for the request - looking for movies only
  $.getJSON(url, function(jsondata) {
  //Using the JQuery JSON shortcut
      addResults(jsondata);
      //Handling the results
  });
}

function addResults(jsondata) {
  console.log(jsondata);
  //Logging the JSON data to allow for data mining
  var htmlstring = "";
  //Creating a String to contain the HTML to inject
  if (jsondata.length > 0) {
    for (var i = 0; i < 10; i++) {
      var title = jsondata.Search[i].Title;
      var poster = jsondata.Search[i].Poster;
      //Storing the parameters of each result in a variable

      htmlstring += '<div class="grid-100 grid-parent result">' + '\n';
      htmlstring += '  <div class="grid-80">' + '\n';
      htmlstring += '    <div class="text">' + '\n';
      htmlstring += '      <h1 class="title">' + title + '</h1>' + '\n';
      htmlstring += '      <ul class="info">' + '\n';
      htmlstring += '        <li class="rating">⭐️ 7.4 <i> /10</i></li>' + '\n';
      htmlstring += '        <li class="duration">Run Time: 2h 21m</li>' + '\n';
      htmlstring += '        <li class="age">Rated: PG-13</li>' + '\n';
      htmlstring += '      </ul>' + '\n';
      htmlstring += '    </div>' + '\n';
      htmlstring += '    <div class="moredetails">' + '\n';
      htmlstring += '      <button class="button">More Details</button>' + '\n';
      htmlstring += '    </div>' + '\n';
      htmlstring += '  </div>' + '\n';
      htmlstring += '\n';
      htmlstring += '  <div class="grid-20">' + '\n';
      htmlstring += '    <img class="poster" src="' + poster + '" alt = "Poster">' + '\n';
      htmlstring += '  </div>' + '\n';
      htmlstring += '</div>' + '\n';
      htmlstring += '\n';
    } //Iteratng over the collection of results
  } else {
    htmlstring += '<div class="grid-100" id="errormessage">\n';
    htmlstring += '  <h1 class="title">Oops!</h1>\n';
    htmlstring += "  <p>We couldn't find anything with that in the title. Please try again with a different search term.</p>\n";
    htmlstring += '</div>\n';
    //Creating an error message if no data is returned
  }

  $('#results').html(htmlstring);
  //Injecting the HTML into the empty container
}
