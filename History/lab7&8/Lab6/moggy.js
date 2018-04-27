function addContent() {
  var searchString = document.location.search;
  searchString = searchString.substring(1);
  var nvPairs = searchString.split("&");
  //var namePair= nvPairs[0].split("=");
  var name = nvPairs[0].split("=")[1];
  var list = document.createElement("ul");
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

function addContentSamePage(form) {
  var name = form[0].value;
  //var name = values[0].value;
  var list = document.createElement("ul");
  list.appendChild(document.createTextNode(name));
	document.body.appendChild(list);
	for (i = 1; i < form.length - 2; i++) {
		var new_item = document.createElement("li");
		var text = document.createTextNode(form[i].value);
		new_item.appendChild(text);
		list.appendChild(new_item);
	}
}

function removeLast() {
  var items = document.getElementsByTagName("ul");
  var last = items[items.length - 1];
  last.parentNode.removeChild(last);
}
