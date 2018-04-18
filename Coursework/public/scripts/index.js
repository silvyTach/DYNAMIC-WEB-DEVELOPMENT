// $(function(){
//   //document ready
//   alert("Document Ready");
//   getResultsFromOMDB();
  // $('#searchform').submit(function(){
  //   var searchterms = $('#searchterms').val();
  //   //addItemToList(searchterms);
  //   getResultsFromOMDB(searchterms);
  //   return false;
  // });
// });
// function getResultsFromOMDB() {
//   var url = 'http://www.omdbapi.com/?apikey=280e6eab&s=Avengers';
//   $.getJSON(url, function(jsondata) {
//     addResultTitles(jsondata);
//   });
//
//   function addResultTitles(jsondata) {
//     var htmlstring = "";
//     for(var i=0; i<5; i++){
//       htmlstring+= jsondata.Search[i];
//     }
//     console.log(htmlstring);
//   }
// }

// ------------------------------------------------------------------------------------------------------
$(function(){
  //document ready
  alert("Document Ready");
    getResultsFromOMDB();
  });
function getResultsFromOMDB() {
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.themoviedb.org/3/movie/popular?api_key=305a3b42d88760bd22c9f8c8c54f788d",
  "method": "GET",
  "headers": {},
  "data": "{}"
}

$.ajax(settings).done(function (response) {
  var htmlstring = "";
  for(var i=0; i<5; i++){
    console.log(response.results[i].title);
  }
});
}
