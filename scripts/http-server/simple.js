// Simple Node Js Server

var http = require('http'),
    port = 8000;

var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'content-type': 'text/html' }); // Set response code and content-type header
    res.write('Hello World!');
    res.end();
});

server.listen(port);

console.log('Server listening on port : ' + port);
