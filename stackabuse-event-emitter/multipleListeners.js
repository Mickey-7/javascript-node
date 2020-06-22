// snippet : req
// invoke EventEmitter from events
const { EventEmitter } = require("events");

// In this function, we have started an interval-based event
// that emits the update event in an interval of a second.
// snippet : nfn
const countDown = (countdownTime) => {
  // create EventEmitter
  const eventEmitter = new EventEmitter();
  let currentTime = 0;

  //   snippet : seti
  const timer = setInterval(() => {
    currentTime++;
    eventEmitter.emit("update", currentTime);

    // At the first if condition, we check if the countdown has reached
    // the end and stop the interval-based event.
    // If so, we fire an end event.
    // check if countdown reached the end
    // snippet : if
    if (currentTime === countdownTime) {
      clearInterval(timer);
      // end eventEmitter
      eventEmitter.emit("end");
    }

    // In the second condition, we check if the countdown is 2 seconds
    //  away from ending, and publish the end-soon event if so.
    // check if countdown will end in 2 seconds
    if (currentTime === countdownTime - 2) {
      eventEmitter.emit("end-soon");
    }
  }, 1000);
  return eventEmitter;
};

// Now, let's add a few subscribers to this event emitter:

const myCountDown = countDown(7);

myCountDown.on("update", (t) => {
  console.log(`${t} seconds since the timer started`);
});

myCountDown.on("end", () => {
  console.log(`Countdown is completed`);
});

myCountDown.on("end-soon", () => {
  console.log(`Countdown will end in 2 seconds`);
});

// terminal output
// C:\Users\donat\Documents\stackabuse-event-emitter>node multipleListeners
// 1 seconds since the timer started
// 2 seconds since the timer started
// 3 seconds since the timer started
// 4 seconds since the timer started
// 5 seconds since the timer started
// Countdown will end in 2 seconds
// 6 seconds since the timer started
// 7 seconds since the timer started
// Countdown is completed
