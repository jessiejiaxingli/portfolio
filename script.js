var pageTitleElem;
var outputGridElem;
var projectDisplayElem;

var portfolioCollection = {
	{
		"image" : "beijing.JPG",
		"category" : "trad",
		"id" : "beijing",
		"title" : "Beijing Hutong",
		"description": "Part of a collection about my childhood, this is a scene of a Beijing Hutong, which refers to the pathways between old architecture in the historical areas of Beijing. Those pathways are familiar to my childhood, where I spent my summers playing in the shade of leaves.",
	},
	{
		"image" : "captain.JPG",
		"category" : "trad",
		"id" : "captain",
		"title" : "Oh Captain, My Captain",
		"description": "An oil painting inspired by Walt Whitman's poem \"O Captain! My Captain! \"",
	},
	{
		"image" : "child.JPG",
		"category" : "trad",
		"id" : "child",
		"title" : "Home",
		"description": "Developing my ability to paint humans, I was drawn to this subject because it evokes a sense of familiarity with my own childhood and my brother's as well.",
	},
	{
		"image" : "child.JPG",
		"category" : "trad",
		"id" : "child",
		"title" : "Home",
		"description": "Developing my ability to paint humans, I was drawn to this subject because it evokes a sense of familiarity with my own childhood and my brother's as well.",
	},
	{
		"image" : "cat.jpg",
		"category" : "trad",
		"id" : "cat",
		"title" : "Hunter",
		"description": "Charcoal sketch of a cat.",
	},
	{
		"image" : "burning.jpg",
		"category" : "digital",
		"id" : "burning",
		"title" : "Burning",
		"description": "Digital piece of a bare tree at sunset as an investigation in color.",
	},
	{
		"image" : "rain.JPG",
		"category" : "digital",
		"id" : "rain",
		"title" : "Rainy Days",
		"description": "Exploration of chinese architecture and inspired by the artwork made by Studio Ghibli.",
	},
	{
		"image" : "whaleshark.jpg",
		"category" : "pottery",
		"id" : "whaleshark",
		"title" : "Whale Shark Planter",
		"description" : "A ceramic whale shark planter.",
	}
}

document.addEventListener("DOMContentLoaded", function(){
	pageTitleElem = document.getElementById("pageTitle");
	outputGridElem = document.getElementById("outputGrid");
	projectDisplayElem = document.getElementById("projectDisplay");

	var queryString = window.location.search;
	var urlParams = new URLSearchParams(queryString);
	var urlSection = urlParams.get("section");
	var urlID = urlParams.get("id");

	if (urlSection != "item"){
		if (urlSection == "digital"){
			pageTitleElem.innerText = "Digital Work";
		}
		else if (urlSection == "trad"){
			pageTitleElem.innerText = "Traditional Work";
		}
		else if (urlSection == "pottery"){
			pageTitleElem.innerText = "Pottery";
		}

		for (var i = 0; i < portfolioCollection.length; i++) {
		    if (portfolioCollection[i]["category"] == urlSection || urlSection == "" || urlSection == null){
		    	createProjectPreview(portfolioCollection[i]);
		    }
		}
	}
	else {
		for (var i = 0; i < portfolioCollection.length; i++) {
			if (portfolioCollection[i]["id"] == urlID) {
				createProjectPage(portfolioCollection[i]);
			}
	  }
	}
});

function createProjectPreview(incomingJSON){
	var newPreviewLink = document.createElement("A");
	newPreviewLink.href = "index.html?section=item&id=" + incomingJSON["id"];

	var newPreviewElement = document.createElement("DIV");
	newPreviewLink.appendChild(newPreviewElement);

	var newPreviewThumbnail = document.createElement("IMG");
	newPreviewThumbnail.classList.add("thumbnail");
	newPreviewThumbnail.src = incomingJSON["image"];
	newPreviewElement.appendChild(newPreviewThumbnail);

	var newPreviewTitle = document.createElement("P");
	newPreviewTitle.classList.add("previewTitle");
	newPreviewTitle.innerText = incomingJSON["title"];
	newPreviewElement.appendChild(newPreviewTitle);

	outputGridElement.appendChild(newPreviewLink);
}

function createProjectPage(incomingJSON) {
  pageTitleElement.innerText = incomingJSON["title"];

  var newProjectElement = document.createElement("DIV");

  var newProjectImage = document.createElement("IMG");
  newProjectImage.classList.add("projectHeroImage");
  newProjectImage.src = incomingJSON["image"];
  newProjectElement.appendChild(newProjectImage);

  var newProjectDescription = document.createElement("P");
  newProjectDescription.classList.add("description");
  newProjectDescription.innerText = incomingJSON["description"];
  newProjectElement.appendChild(newProjectDescription);

  projectDisplayElement.appendChild(newProjectElement);

}