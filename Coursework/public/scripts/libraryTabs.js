$()
var searchString = document.location.search;
searchString = searchString.substring(1);
var nvPairs = searchString.split("&");
var tab= "Popular";
for (var i = 0; i < nvPairs.length; i++) {
var nvPair = nvPairs[i].split("=");
var name = nvPair[0];
if(name == "id") {
  tab = nvPair[1];
  break;
}
}
$("#b"+tab).addClass("active");
$("#" + tab).css('display', 'block');
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
    $("#" +tabName).css("display", "block");
    evt.currentTarget.className += " active";
}
