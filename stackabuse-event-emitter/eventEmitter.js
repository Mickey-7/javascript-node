// First, import the EventEmitter class from the events modules:
const { EventEmitter } = require("events");

// Then let's create an EventEmitter:
const timerEventEmitter = new EventEmitter();

// Let's make this event repeat every second.
// Using the setInterval() method,
// a timer is created which will
// publish the update event every second:
let currentTime = 0;
// snippet  : setIn
setInterval(() => {
  currentTime++;
  // To publish an event from this object is as easy as:
  // We trigger the emitter via the emit() method,
  // which pushes the event with the information we've provided.
  timerEventEmitter.emit("update", currentTime);
}, 1000);
// The EventEmitter instance accepts an event name and an arbitrary set of arguments.
// In this case, we've passed the eventName as update and the currentTime as the time from the start of the application.

// With our event-emitter ready, let's subscribe an event-listener to it:
timerEventEmitter.on("update", (time) => {
  console.log("Message received from publisher");
  console.log(`${time} seconds passed since the program started`);
});
// Using the on() method, passing the event name to specify which one we'd like to attach a listener to, allows us to create listeners.
// On the update event, a method is run which logs the time.
// You can add the same listener over and over again, and each one will subscribe to the event.

// The second argument of the on() function is a callback that can accept any number of the extra data that was emitted by the event.
// Each listener can choose what data they want, once the order is kept.

// By contrast, we can use the once() method to subscribe -
// if you need to execute something only the first time an event triggers:
// timerEventEmitter.once("update", (time) => {
//   console.log("Message Received from publisher");
//   console.log(`${time} seconds passed since the program started`);
// });

// open terminal then type : node eventEmitter
// C:\Users\donat\Documents\stackabuse-event-emitter>node eventEmitter
// Message received from publisher
// 1 seconds passed since the program started
// Message received from publisher
// 2 seconds passed since the program started
// Message received from publisher
// 3 seconds passed since the program started
// Message received from publisher
// 4 seconds passed since the program started
// Message received from publisher
// 5 seconds passed since the program started
// Message received from publisher
// 6 seconds passed since the program started
// Message received from publisher
// 7 seconds passed since the program started
// .......
