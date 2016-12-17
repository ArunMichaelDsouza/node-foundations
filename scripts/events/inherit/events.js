// Custom event creation

var MyEvent = require('./lib');

// Listen to custom event 
MyEvent.on('fired', function(msg) {
	console.log('Event fired!');
	console.log('Message from event : '+msg);
});

// Call custom event trigger and run callback in listener function above
MyEvent.fireEvent();