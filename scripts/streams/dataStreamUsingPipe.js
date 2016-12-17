// HTTP echo server using pipe

var http = require('http');

http.createServer(function(req, res) {
	res.writeHead(200);
	req.pipe(res); // Pipe request data back to response (pipes data from a readable stream to a writable stream)
}).listen(8000);

console.log('Server running...');