$(function(){
  //document ready
  alert("Document Ready");
  getResultsFromOMDB();
  // $('#searchform').submit(function(){
  //   var searchterms = $('#searchterms').val();
  //   //addItemToList(searchterms);
  //   getResultsFromOMDB(searchterms);
  //   return false;
  // });
});
function getResultsFromOMDB() {
  var url = 'http://www.omdbapi.com/?apikey=280e6eab&type=movie';
  $.getJSON(url, function(jsondata) {
    addResultTitles(jsondata);
  });

  function addResultTitles(jsondata) {
    var htmlstring = "";
    for(var i=0; i<5; i++){
      htmlstring+= jsondata.Search[i];
    }
    console.log(htmlstring);
  }
}

// ------------------------------------------------------------------------------------------------------
//JS for the slideshow on the index page
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slideshow");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
