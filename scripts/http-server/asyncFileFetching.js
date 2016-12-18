// Node server with asynchronous file fetching

var http = require('http'),
	port = 8000,
	fs = require('fs'),
	path = require('path');

var filePath = path.join(__dirname, '../../files/file.txt');

//Create HTTP server and return headers and text
var server = http.createServer(function(req, res) {
	fs.readFile(filePath, function(err, contents) {
		res.writeHead(200, {'content-type': 'text/html'});
		res.write(contents);
		res.end();
	});	
});

server.listen(port);

console.log('Server listening on port : '+port);
