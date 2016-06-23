/*
This script is a simple ajax task for testing and learning.
*/

// Make multiple server requests
for ( x = 0; x < 1000; x++) {
	
	// Create a new xhr request object
	var xhrRequest = new XMLHttpRequest();

	// Configure request object
	xhrRequest.open('GET', '../data/data.txt', false);

	// Send request object
	xhrRequest.send();
	
	if (xhrRequest.readyState === 4) {
		// Output the request object and response text
		console.log(xhrRequest);
		console.log(xhrRequest.responseText);

		// Get and Create page elements
		var parentElement = document.getElementById("body");
		var ajaxElement = document.createElement("p");
		var ajaxText = document.createTextNode(xhrRequest.responseText);

		// Append elements to page
		ajaxElement.appendChild(ajaxText);
		parentElement.appendChild(ajaxElement);
	}
}

