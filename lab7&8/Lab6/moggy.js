function addContent() {
  var searchString = document.location.search;
  searchString = searchString.substring(1);
  var nvPairs = searchString.split("&");
  //var namePair= nvPairs[0].split("=");
  var name = nvPairs[0].split("=")[1];
  var list = document.createElement("ol");
  var text =
  list.appendChild(document.createTextNode(name));
	document.body.appendChild(list);

	for (i = 1; i < nvPairs.length - 1; i++) {
    var nvPair = nvPairs[i].split("=");
		var new_item = document.createElement("li");
		var text = document.createTextNode(nvPair[1]);
		new_item.appendChild(text);
		list.appendChild(new_item);
	}
}
