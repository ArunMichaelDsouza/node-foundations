// Chattr app

var express = require('express'),
	app = express();
	http = require('http').Server(app),
	io = require('socket.io')(http);

app.use(express.static(__dirname)); // Use express static middleware

app.get('/', function(req, res) {
	res.sendFile('index.html');
	res.end();
});

// Listen on 'message' event and broadcast it to all listeners
io.on('connection', function(socket) {
	socket.on('message', function(data) {
		socket.broadcast.emit('message', data);
	});
});

http.listen(8000, function() {
	console.log('Server running...');
});