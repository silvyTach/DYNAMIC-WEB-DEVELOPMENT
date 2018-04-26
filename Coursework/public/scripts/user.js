$(function(){
  //document ready
  //alert("Document Ready");
  var length = $("#length").html();
  // var id = $('.movie').html();
  for (var i = 0; i < length; i++) {
    var id= $("#movie"+i);
    console.log(id);
    getInfo(id);
     $('.movie' + i).remove();
  }
   $('#length').remove();
  // for (var i = 0; i < id.length; i++) {
  //   getInfo(id[i]);
  //   $('.id').remove();
  // }
  // getInfo(id);
  });


  function getInfo(id) {
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
        html+= '<div class="grid-20 mobile-grid-45 tablet-grid-45 grid-parent librarybox">'
        html+= '<div class="grid-100 libraryimage"> <img class="poster" '
        html+= "src='https://image.tmdb.org/t/p/w185" + response.poster_path + "' alt='" + response.title + " poster'></div>"
        html+= '<div class="grid-100 librarytitle"><h4 class="title">' + response.title + "</h4></div>"

        html+= '<div class="grid-100 librarybuttons"><button class="button">More Details</button>'
        html+= '<button class="button">Remove</button></div></div>'
      $('#library').append(html);
    });
  }
