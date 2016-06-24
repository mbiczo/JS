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
var xhrRequest;

// Check Browser Compatibility
if (window.XMLHttpRequest) {  // firefox, safari, chrome
	xhrRequest =  new XMLHttpRequest();
} else {  // older IE
	xhrRequest = ActiveXObject( "Microsoft.XMLHTTP" );
}

// Configure request object
xhrRequest.open("GET", "http://localhost:8000/data/MasterFields.json", true);

// Create handle for response
xhrRequest.onreadystatechange = function() {
	// Check if successful
	if ( (xhrRequest.readyState === 4) && ( xhrRequest.status===200)) {
	
		// Append TEXT, to text element, to parent element
		//appendText(xhrRequest.responseText, "p", "body");
		
		// JSON parsing
		var jsonItems = JSON.parse(xhrRequest.responseText);
		console.log(jsonItems);
		
		// Build output structure
		var output = '<ul>';
		for (var key in jsonItems) {
			output += '<li>' + key + '</li>';
		}
		output += '</ul>';
		
		// Output to page
		document.getElementById("jsonOutput").innerHTML = output;
		
	}
}

// Send request object
xhrRequest.send();
















