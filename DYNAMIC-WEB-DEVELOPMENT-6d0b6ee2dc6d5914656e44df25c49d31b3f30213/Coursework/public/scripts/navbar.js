$(function() {
    var searchString = document.location.search;
    searchString = searchString.substring(1);
    var nvPairs = searchString.split("&");
    var user;
    for (var i = 0; i < nvPairs.length; i++) {
        var nvPair = nvPairs[i].split("=");
        var name = nvPair[0];
        if (name == "user") {
            user = nvPair[1];
            break;
        }
    }
    // extracting the username from the url so it can be passed in the links to other pages

    $("#sendUser").val(user);
    $("#sendUser").css("display", "none");
    // adding the username in the search form so it's not lost when searching for a movie

    // Checks if there is userinfo in the url
    // if thre is, the content of the navigation bar changes
    if (searchString != "") change(user);
});

function change(user) {
    $('#menu0').attr("href", "/?user=" + user);
    $('#menu1').attr("href", "/library?user=" + user);
    $('#menu2').html('My movies');
    $('#menu2').attr("href", "/user?user=" + user);
    $('#menu3').html('Sign out');
    $('#menu3').attr("href", "/signout");
}
