//helps communicate diffrent parts of application without being directly connected
const EventEmitter = require('events');

const event = new EventEmitter();
event.on("greet1", () => {
    console.log("Hello EventEmitter!");
})
event.emit("greet1");