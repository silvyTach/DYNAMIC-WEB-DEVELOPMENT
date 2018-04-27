$(function(){
  //document ready
  alert("Document Ready");

  $('#searchform').submit(function(){
    var searchterms = $('#searchterms').val();
    //addItemToList(searchterms);
    getResultsFromOMDB(searchterms);
    return false;
  });
});
function getResultsFromOMDB(searchterms) {
  var url = 'http://www.omdbapi.com/?apikey=280e6eab&s=' + searchterms;
  $.getJSON(url, function(jsondata) {
    printJSON(jsondata);
  });

  function printJSON(jsondata) {
    var normal = JSON.stringify(jsondata);
    $('#resultsbox').append("<p>" + normal + "</p>");
  }
}
// function addItemToList(item){
//   $('#results').append("<li>" + item + "</li>");
// }
