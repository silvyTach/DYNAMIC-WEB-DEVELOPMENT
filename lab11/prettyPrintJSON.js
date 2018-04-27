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
    prettyPrintJSON(jsondata);
  });

  function prettyPrintJSON(jsondata) {
    var pretty = JSON.stringify(jsondata, null, 4);
    $('#resultsbox').append("<pre>" + pretty + "</pre>");
  }
}
// function addItemToList(item){
//   $('#results').append("<li>" + item + "</li>");
// }
