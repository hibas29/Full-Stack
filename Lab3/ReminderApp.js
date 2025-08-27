const EventEmitter = require("events");
const event = new EventEmitter();
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

event.on("reminder", (task) => {
    console.log(" Reminder:", task);
});

rl.question("Enter your task: ", (task) => {
    rl.question("Enter reminder time in seconds: ", (seconds) => {
        const delay = parseInt(seconds) * 1000;
        console.log("setting reminder for sec.");
        setTimeout(() => {
            event.emit("reminder", task);
            rl.close();
        }, delay);
    });
});