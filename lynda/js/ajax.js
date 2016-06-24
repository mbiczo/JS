/*
This script is a simple ajax task for testing and learning.
*/

// Appends text to a parent element in desired element type
function appendText(text, textElementType, parentElementID) {
	// Output the request object and response text
	console.log(xhrRequest);
	console.log(xhrRequest.responseText);

	// Get and Create page elements
	var parentElement = document.getElementById(parentElementID);
	var ajaxElement = document.createElement(textElementType);
	var ajaxText = document.createTextNode(text);

	// Append elements to page
	ajaxElement.appendChild(ajaxText);
	parentElement.appendChild(ajaxElement);	
}  




// Create a new xhr request object
var xhrRequest = new XMLHttpRequest();

// Configure request object
xhrRequest.open("GET", "http://localhost:8000/data/data.txt", false);

// Send request object
xhrRequest.send();

// Check if successful
if ( (xhrRequest.readyState === 4) && ( xhrRequest.status===200)) {
	
	appendText(xhrRequest.responseText, "p", "body");
	
	
	
	
	/*	
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
	*/
	
	}


