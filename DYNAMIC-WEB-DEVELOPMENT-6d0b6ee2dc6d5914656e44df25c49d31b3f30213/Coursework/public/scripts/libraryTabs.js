$()
    // here we load the initial tab that will be displayed in the library page
    // if the user is coming from the index page from a "view all" link,
    // they will expect to see all movies from a certain genre
    // the genre id is passed via the url and is used to load the tab with the appropriate genre
    // if the user is coming from the navbar Library link, the default tab with the most popular movies is loaded
var searchString = document.location.search;
searchString = searchString.substring(1);
var nvPairs = searchString.split("&");
var tab = "Popular"; //assigning the default tab
for (var i = 0; i < nvPairs.length; i++) {
    var nvPair = nvPairs[i].split("=");
    var name = nvPair[0];
    if (name == "id") {
        tab = nvPair[1];
        break; // if in the genre id is passed in the url we assign it to the tab variable
    }

}
// then we make the button for the desired tab active
$("#b" + tab).addClass("active");
// and display the desired tab
$("#" + tab).css('display', 'block');

// this is a function that loads a new tab every time a tab button is pressed
function showTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = $(".tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = $(".tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    $("#" + tabName).css("display", "block");
    evt.currentTarget.className += " active";
}
