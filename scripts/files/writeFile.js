// Writing to a file

var fs = require('fs');

var text = 'Hello World!';

fs.writeFile(__dirname+'/text.txt', text, function(err) {
	if(!err) {
		console.log('File saved!');
	}
	else {
		console.log('Some error occurred!');
	}
});