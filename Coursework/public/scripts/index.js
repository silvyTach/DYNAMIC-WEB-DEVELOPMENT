$(function(){
  //document ready
  //alert("Document Ready");

  //---------- JavaScript for the slideshow on the index page ----------

  var slideIndex = 1;
  showDivs(slideIndex);
  //Initialising the slideshow index at 1 (first slide) and displaying that slide

  function plusDivs(n) {
    showDivs(slideIndex += n);
    //Whenever an arrow is clicked it will send either 1 (right) or -1 (left)
    //This value is added to the current index value and then the new index is used to show that particular slide
  }

  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slideshow");
    //All slides are selected
    if (n > x.length) {slideIndex = 1}
    //If the intended index/index received is greater than the number of slides, the index is reset to the start
    if (n < 1) {slideIndex = x.length}
    //If the intended index/index received is less than 1, the index is reset to the end
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
  }
  //All the slides but the targeted one are hidden

  }

  //---------- End of slideshow ----------

  var genres = ["Comedy", "Action", "Romance", "Crime"];
  var genreids = [35, 28, 10749, 80];
  //Creating arrays to store the genre names we need and their TheMovieDB API ids for calls later on

  for (var i = 0; i < genreids.length; i++) {
    top5(genres[i], genreids[i]);
    //For each genre, it and its genre id are passed to the top5 method to populate its area on the index page
  }

});

function top5(genre, id) {

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.themoviedb.org/3/discover/movie?with_genres=" + id + "&page=1&sort_by=popularity.desc&api_key=305a3b42d88760bd22c9f8c8c54f788d",
    "method": "GET",
    "headers": {},
    "data": "{}"
  }
  //Initialising settings for the API call using the JQuery AJAX method
  //The URL makes use of the ids we selected (provided by the API documentation), the API key and additional parameters to sort our results by popularity

  $.ajax(settings).done(function (response) {
    //console.log(response);
    //Testing a response comes through
    var html = "<div class='top'>\n";
    html += "  <h2>" + genre + " <i>#Top5</i></h2><a href='/library'>view all ></a>\n";
    html += "</div>\n";
    //Declaring a variable to store the HTML String to include and formatting it a bit
      for(var i = 0; i < 5; i++) {
        html += "  <div class='poster-title'>\n";
        html += "    <img src='https://image.tmdb.org/t/p/original/" + response.results[i].poster_path + "' width='261px' alt='" + response.results[i].title + " poster'>\n";
        html += "    <span>" + response.results[i].title + "</span>\n";
        html += "    <div class='imageInner'>\n";
        html += "      <span><a href='/movieshowinfo?id=" + response.results[i].id + "' class='poster-button' tabindex='-1'>more details</a></span>\n";
        html += "    </div>\n";
        html += "  </div>\n";
        //Formatting the HTML String
        //console.log(response.results[i].title);
        $("#" + genre).html(html);
        //Adding the HTML String to its allocated div in the index page
      }
      //End of for loop
    });
    //End of AJAX API call

}
