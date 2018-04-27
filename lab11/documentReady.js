$(function(){
  //document ready
  //alert("Document Ready");

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
    addResultTitles(jsondata);
  });

  function addResultTitles(jsondata) {
    var htmlstring = "";
    for(var i=0; i<5; i++){
      var title = jsondata.Search[i].Title;
      htmlstring+= "<li>" + title + "</li>";
    }
    $('#resultsbox').html(htmlstring);
  }
}
// function addItemToList(item){
//   $('#results').append("<li>" + item + "</li>");
// }
