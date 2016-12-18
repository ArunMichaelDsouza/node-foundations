// Events library

var events = require('events').EventEmitter;

// Custom event
function CustomEvent() {
	this.syncData = function(msg) {
		this.emit('syncData', msg); // Data sync event
	};
};

CustomEvent.prototype = events.prototype;

var Event = new CustomEvent();

module.exports = Event;