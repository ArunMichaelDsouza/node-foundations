// Custom events library that inherits from EventEmitter

var events = require('events').EventEmitter;

// Custom event constructor
function MyEvent(msg) {

    // Custom event trigger
    this.fireEvent = function() {
        this.emit('fired', msg)
    }
};

// Inherit properties from EventEmitter to custom event
MyEvent.prototype = events.prototype;

// Create custom event instance
var eventInstance = new MyEvent('This is a message from custom event.');

module.exports = eventInstance;