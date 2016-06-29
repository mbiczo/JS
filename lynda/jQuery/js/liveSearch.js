
/************************************************************************
liveSearch: simple app that dynamically updates items as the user types
************************************************************************/


// Wait until the whole doc is loaded
$("document").ready(function() {
	
	// Verify jQuery installed
	console.log("hello console, I'm installed!");
	
	// When enduser types into search box, run ajax
	$('#search').keyup(function() {
		
		// Setup variables
		
		var $searchResults = $("#searchResults");
		var searchField = $('#search').val().replace(/\s/g, "+");  //replace global spaces with '+'
		var myExp = new RegExp(searchField, "i");  //convert to case-insensitive regex
		
		// Ajax function to GET data
		$.ajax({
			url: "http://localhost:8000/jQuery/data/MasterFields.json",
			type: "GET",
			dataType: "JSON",
			success: function(data) {
				
				// Create output string of list items
				var outputList = "";
				
				// For each item, append to page
				$.each(data, function(header, item) {
					
					// Check for matches
					if ( header.search(myExp) != -1 ) {
						
						//var itemInfo = {'ItemName': header, 'ItemID': item.ID};
						outputList += "<p class= 'bold'>" + header + "</p>";

						// consider creating a function
						outputList +=	"<p>Item Definition: " + 
												"<a href='#' id= " + 
												item.ID +" >" + 
												item.data_governance.item_definition + 
												"</a>" + 
												"</p>";

					} // if match
					
				}); //for each
				
				// replace contents with new list
				$searchResults.html(outputList);
				
			}, // on success
			
			
			// Run this when there's an error
			error: function() {
				
				alert("There's been an error");
				
			}  //on error
			
		}); //.ajax

	});  //on.keyup
		
}); //document.ready




