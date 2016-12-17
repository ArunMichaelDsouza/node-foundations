// HTTP request readable steam

var http = require('http');

http.createServer(function(req, res) {
	res.writeHead(200);

	// Send request data chunk back to response
	req.on('data', function(chunk) {
		console.log(chunk.toString());
		res.write(chunk.toString());
	});

	req.on('end', function() {
		res.end();
	});
}).listen(9000);

console.log('Server running...');