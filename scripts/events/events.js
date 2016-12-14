// Event creation and emitting

var eventLib = require('./lib'); // Require event library

// Emit events
eventLib.emit('log', 'Hello!');
eventLib.emit('add', 10, 2);
eventLib.emit('mul', 10, 2);
setTimeout(function() {
	eventLib.emit('sub', 10, 2);
}, 2000);
