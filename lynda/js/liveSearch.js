// Simple live search example that refreshes each keystroke



$('#search').keyup(function() {
	
	var searchField = $('#search').val();
	
	var myExp = new RegExp(searchField, "i");
	
	//console.log(searchField);
	
	$.getJSON('../data/masterFields.json', function(data) {
	
	//console.log(data);
	
	var output = '<ul>';
	
	$.each(data, function(key, value) {
		
		//console.log('key', key, 'value', value);
		//console.log('dg', value.data_governance);
		
		if (key.search(myExp) != -1) {
			
			output += '<li>';
			output += '<p class= "bold">' + key + '</p>';
		
		
			var dgKey;
			var dgValue;
		
			$.each(value.data_governance, function(key, value) {
				dgKey = key;
				dgValue = value;
				//console.log('k', dgKey, 'v', dgValue);
				output += '<p>' + dgKey + ':' + dgValue + '</p>';
			});
		
		
			output += '</li>';
			
			
		}
		
		
	});
	
	output += '</ul>';
	
	$('#searchContainer').append(output);
	
	});
});

