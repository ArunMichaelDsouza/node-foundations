// Simple Node Js Server

var http = require('http'),
	port = 8000;

// var server = http.createServer(function(req, res) {
// 	res.writeHead(200, {'content-type': 'text/html'});
// 	res.write('Hello World!');
// 	res.end();
// });

// server.listen(port);



// Node server with asynchronous file fetching

var fs = require('fs'),
	filePath = process.cwd() + '/files/file.txt';

var server = http.createServer(function(req, res) {
	fs.readFile(filePath, function(err, contents) {
		res.writeHead(200, {'content-type': 'text/html'});
		res.write(contents);
		res.end();
	});	
});

server.listen(port);

console.log('Server listening on port : '+port);

