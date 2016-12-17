// Copy file contents using pipe via HTTP server

var http = require('http'),
	fs = require('fs'),
	path = require('path');

var filePath = path.join(__dirname, '../../files/copied-file2.txt');

http.createServer(function(req, res) {
	var writeStream = fs.createWriteStream(filePath);
	req.pipe(writeStream); // Pipe read data from file to write stream

	req.on('end', function() {
		res.end();
	});
}).listen(8000);

console.log('Server running...');