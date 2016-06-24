
//$('#jsonOutput').load('../data/masterFields.json');

$.getJSON('../data/masterFields.json', function(data) {
	console.log(data)
	
	var output = '<ul>';
	$.each(data, function(key, value) {
		output += '<li>' + key + '</li>';
	});
	output += '</ul>';
	
	$('#jsonOutput').append(output);
});