$(function(){
  //document ready
  alert("Document Ready");

  $('#searchform').submit(function(){
    addItemToList("Example Item");
    return false;
  });
});
function addItemToList(item){
  $('#results').append("<li>" + item + "</li>");
}
