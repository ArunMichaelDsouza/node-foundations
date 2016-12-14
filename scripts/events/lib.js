// Events library 

var events = require('events');

var eventLib = new events.EventEmitter; // Create event emitter

// Define all events 
eventLib.on('log', function(message) {
	console.log('Message is : '+message);
}).on('add', function(a, b) {
	console.log('Result of '+a+' + '+b+' = '+ parseInt(a + b, 10));
}).on('mul', function(a, b) {
	console.log('Result of '+a+' * '+b+' = '+ parseInt(a * b, 10))
}).on('sub', function(a, b) {
	console.log('Result of '+a+' - '+b+' = '+ parseInt(a - b, 10))
})

// Export event library
module.exports = eventLib;