// liveSearch: simple app that dynamically updates items as the user types


$("document").ready(function() {
	
	// Verify jQuery installed
	console.log("hello console, I'm installed!");
	
	// Run ajax
	getData();	

});


function getData(){
	var $searchResults = $("#searchResults");
	
	$.ajax({
		url: "http://localhost:8000/jQuery/data/MasterFields.json",
		type: "GET",
		dataType: "JSON",
		success: function(data) {
			//console.log('Success!', data);
			$.each(data, function(i, item) {
				var itemInfo = {'ItemName': i, 'ItemID': item.ID};
				$searchResults.append("<p class= 'bold'>" + i + "</p>");
				$searchResults.append("<p>Item Definition: " + "<a href='#' id= " + item.ID +" >" + item.data_governance.item_definition + "</a>" + "</p>");
				$searchResults.append("<button id= 'changeDef' name= " + item.ID + ">Change Def</button>")
				//console.log(item);
				//console.log(itemInfo);
			});
		},
		error: function() {
			alert("There's been an error");
		}
	});
}

