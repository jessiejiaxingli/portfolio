var pageTitleElem;
var outputGridElem;
var projectDisplayElem;

var portfolioCollection = [
	{
		"image" : "beijing.JPG",
		"category" : "trad",
		"id" : "beijing",
		"color" : "#7AA4DD",
		"title" : "Beijing Hutong",
		"description": "Beijing Hutong \n \n Part of a collection about my childhood, this is a scene of a Beijing Hutong, which refers to the pathways between old architecture in the historical areas of Beijing. Those pathways are familiar to my childhood, where I spent my summers playing in the shade of leaves.",
	},
	{
		"image" : "captain.JPG",
		"category" : "trad",
		"id" : "captain",
		"color" : "#6BABD3",
		"title" : "Oh Captain, My Captain",
		"description": "Oh Captain, My Captain \n \n An oil painting inspired by Walt Whitman's poem \"O Captain! My Captain! \"",
	},
	{
		"image" : "child.JPG",
		"category" : "trad",
		"id" : "child",
		"color" : "#57809E",
		"title" : "Home",
		"description": "Home \n \n Developing my ability to paint humans, I was drawn to this subject because it evokes a sense of familiarity with my own childhood and my brother's as well.",
	},
	{
		"image" : "cat.jpg",
		"category" : "trad",
		"id" : "cat",
		"color" : "#979660",
		"title" : "Hunter",
		"description": "Hunter \n \n Charcoal sketch of a cat.",
	},
	{
		"image" : "burning.jpg",
		"category" : "digital",
		"id" : "burning",
		"color" : "#3C4E70",
		"title" : "Burning",
		"description": "Burning \n \n Digital piece of a bare tree at sunset as an investigation in color.",
	},
	{
		"image" : "rain.JPG",
		"category" : "digital",
		"id" : "rain",
		"color" : "#596A71",
		"title" : "Rainy Days",
		"description": "Rainy Days \n \n Exploration of chinese architecture and inspired by the artwork made by Studio Ghibli.",
	},
	{
		"image" : "whaleshark.jpg",
		"category" : "pottery",
		"id" : "whaleshark",
		"color" : "#203E4F",
		"title" : "Whale Shark Planter",
		"description" : "Whale Shark Planter \n \n A ceramic whale shark planter.",
	},
	{
		"image" : "rabbits.JPG",
		"category" : "trad",
		"id" : "rabbits",
		"color" : "#7B5126",
		"title" : "Cut Out Rabbit",
		"description" : "Cut Out Rabbit \n \n Cut out poster paper in the style of traditional Chinese paper art.",
	},
	{
		"image" : "chinesevillage.JPG",
		"category" : "trad",
		"id" : "village",
		"color" : "#5B80AA",
		"title" : "Golden Hour",
		"description" : "Golden Hour \n \n Oil painting of a Chinese village in snowy mountains.",
	},
	{
		"image" : "dancer.JPG",
		"category" : "trad",
		"id" : "dancer",
		"color" : "#797772",
		"title" : "Dancer",
		"description" : "Dancer \n \n Figure study of a dancing person.",
	},
	{
		"image" : "smalls.jpg",
		"category" : "pottery",
		"id" : "smalls",
		"color" : "#85ADC2",
		"title" : "Miscellaneous Pieces",
		"description" : "Miscellaneous Pieces \n \n Small ceramic charms made to be gifted.",
	},
	{
		"image" : "lotusfield.JPG",
		"category" : "trad",
		"id" : "lotus",
		"color" : "#9CB3BB",
		"title" : "Lotus Fields",
		"description" : "Lotus Fields \n \n Also part of a collection about my childhood, this is a watercolor painting of a lotus field with magazine cutouts.",
	},
];

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
			pageTitleElem.innerText = "Digital Art";
		}
		else if (urlSection == "trad"){
			pageTitleElem.innerText = "Traditional Art";
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
	newPreviewElement.style.backgroundColor = incomingJSON["color"];

	var newPreviewThumbnail = document.createElement("IMG");
	newPreviewThumbnail.classList.add("thumbnail");
	newPreviewThumbnail.src = incomingJSON["image"];
	newPreviewElement.appendChild(newPreviewThumbnail);

	var newPreviewTitle = document.createElement("P");
	newPreviewTitle.classList.add("previewTitle");
	newPreviewTitle.innerText = incomingJSON["title"];
	newPreviewElement.appendChild(newPreviewTitle);

	outputGridElem.appendChild(newPreviewLink);
}

function createProjectPage(incomingJSON) {
  var newProjectElement = document.createElement("DIV");
  newProjectElement.classList.add("projectPage");

  var newProjectImage = document.createElement("IMG");
  newProjectImage.classList.add("projectHeroImage");
  newProjectImage.src = incomingJSON["image"];
  newProjectElement.appendChild(newProjectImage);

  var newProjectDescription = document.createElement("P");
  newProjectDescription.classList.add("description");
  newProjectDescription.innerText = incomingJSON["description"];
  newProjectElement.appendChild(newProjectDescription);

  projectDisplayElem.appendChild(newProjectElement);

}