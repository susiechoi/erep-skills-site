var allImageNames = ["EManger34.jpg", "JJhappy24.jpg", "MFanger24.jpg", "MOhappy14.jpg", "NRhappy34.jpg", "PEanger14.jpg", "WFhappy14.jpg", "Chappy34.jpg", "EMhappy14.jpg", "JJanger34.jpg", "MOanger24.jpg", "MFhappy24.jpg", "NRanger14.jpg", "PEanger34.jpg", "SWanger24.jpg", "WFhappy34.jpg", "MOhappy14.jpg", "JJhappy24.jpg", "WFanger34.jpg"];
var allImages = [];
var questionNumber = 0;
var allUserInput = [];

function populateImages() {
	var imagesAsHTML = ""; 
	var i;
	for (i=0; i<allImageNames.length; i++) {
		imagesAsHTML = imagesAsHTML + "<img src='ebt_photos/"+allImageNames[i]+"' style='display: none'>";
	}
	document.getElementById("imageContainer").innerHTML = imagesAsHTML;
}

function showButton() {
    document.getElementById("happyButton").style.visibility = "visible";
    document.getElementById("angryButton").style.visibility = "visible";
}

function hideButton() {
    document.getElementById("happyButton").style.visibility = "hidden";
    document.getElementById("angryButton").style.visibility = "hidden";
}

function displayNextQuestion() {
	setTimeout("allImages[questionNumber].style.display='none';", 1000);
	setTimeout('showButton()', 1000);
}

function calculateScore() {

}

window.onload = function() {
	populateImages();
	allImages = document.getElementsByTagName("img");
    hideButton();
    displayNextQuestion();
}

function buttonPressed(userInput) {
	allUserInput.push(userInput);
	console.log(allUserInput);
	questionNumber++;
	if (questionNumber < allImages.length) {
		allImages[questionNumber].style.display = "block";
		hideButton();
		displayNextQuestion();
	}
	else {
		calculateScore(); 
	}
}

