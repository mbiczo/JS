// Simple intro to jQuery


$("document").ready(function() {
	
	// Verify jQuery installed
	console.log("hello console, I'm installed!");
	
	// Append to end of body tag
	$("body").append("<p>Hello There</p>");

	// Select by tag, add css styling to all
	$("p").css("border", "3px solid red");

	


});


