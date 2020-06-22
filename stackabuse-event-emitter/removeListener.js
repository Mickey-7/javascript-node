// snippet : req
// invoke EventEmitter from events
const { EventEmitter } = require("events");

// create EventEmitter
const emitter = new EventEmitter();

// snippet : nfn
const f1 = () => {
  console.log(`f1 triggered`);
};

// snippet : nfn
const f2 = () => {
  console.log(`f2 triggered`);
};

// oinvoke the functions on event emiiter
emitter.on("some-event", f1);
emitter.on("some-event", f2);

// call the emitters
emitter.emit("some-event");

// remove emitter f1
emitter.removeListener("some-event", f1);

// call the emitters
emitter.emit("some-event");

// terminal output
// C:\Users\donat\Documents\stackabuse-event-emitter>node removeListener
// f1 triggered
// f2 triggered
// f2 triggered

// removeAllListeners()
// Again, as the name suggests -
// this function will remove all listeners
// from all events of an EventEmitter:
