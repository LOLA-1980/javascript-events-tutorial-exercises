window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	// Some code here
	let greenButton = document.getElementById("theGreen");
    greenButton.addEventListener("click", function() {
        alert("¡Woohoo!");
    });
};

// The listener function here


