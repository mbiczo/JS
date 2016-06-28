// Simple liveSearch app that updates results as the user types

// Display (load) JSON data as user types
$('#search').keyup(function() {
	
	// Grab the search box contents; strip spaces globally; 
	var searchField = $('#search').val().replace(/\s/g, "+");
	
	// DEBUG: output search box text contents
	//console.log(searchField);
	
	// Use RegEx to perform case-insensitive search (consider adding space strip)
	var myExp = new RegExp(searchField, "i");
	
	
	// DEBUG: output lowercase version of search
	//console.log(myExp);
	
	
	// Load data JSON datasource
	// NOTE: CHANGE TO .ajax SO THAT IT IS MORE VERSITILE
	$.getJSON('../data/MasterFields.json', function(data) {
	
	// DEBUG: print object
	//console.log(data);
	
	// Create Unordered list structure (gotta be a better way)
	var outputUlElem = document.createElement("ul");
	
		// Append each header name
		$.each(data, function(key, val) {
		
			// DEBUG: print out each key value
			//console.log(key, val);
			
			if ( (key.search(myExp) != -1) ) {
				
				// DEBUG: output subkey value
				//console.log(val.data_governance.item_definition);

				
				// NOTE: SWITCH TO jQUERY SHORTHAND!!
				var outputListElmt = document.createElement("li");
				var headerItemElmt = document.createElement("p");
				var itemDefinitionElmt = document.createElement("p");
				
				var headerItem = document.createTextNode(key);
				var itemDef = document.createTextNode(val.data_governance.item_definition);
				var itemDefTitle = document.createTextNode('Item Definition: ');
					
					
				headerItemElmt.className = "bold";
				headerItemElmt.appendChild(headerItem);
				itemDefinitionElmt.appendChild(itemDefTitle);
				itemDefinitionElmt.appendChild(itemDef);
				outputListElmt.appendChild(headerItemElmt);
				outputListElmt.appendChild(itemDefinitionElmt);
				outputUlElem.appendChild(outputListElmt);
				
				//$("resultsContainer").html("<p class= 'bold'>" + headerItem+"</p>");
							
			} // if search matches
		
		});  //.each header
	
		
		// Output to div
		$('#resultsContainer').html(outputUlElem);
	
	});  //getJSON
});  //.keyup

