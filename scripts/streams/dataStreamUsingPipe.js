// HTTP echo server using pipe

var http = require('http');

http.createServer(function(req, res) {
	res.writeHead(200);
	req.pipe(res); // Pipe request data back to response
}).listen(8000);

console.log('Server running...');