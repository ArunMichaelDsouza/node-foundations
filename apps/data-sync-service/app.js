// Data sync service app

var express = require('express'),
	event = require('./events');

// Create express app
var app = express();

// Define data sync event
event.on('syncData', function(msg) {
	console.log(msg);
});

// Create root route
app.get('/', function(req, res) {
	res.send('This is the root route');
	event.syncData('Root data sync!'); // Sync data call on root route
	res.end();
});

// Create user route
app.get('/user', function(req, res) {
	res.send('This is the user route'); // Sync data call on user route
	event.syncData('User data sync!');
	res.end();
});

app.listen(8000);

console.log('Server running...');