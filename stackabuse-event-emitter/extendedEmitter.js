// snippet : req
// invoke EventEmitter from events
const { EventEmitter } = require("events");

// CountDown class that extends EventEmitter
class CountDown extends EventEmitter {
  // create constructor
  constructor(countdownTime) {
    super();
    this.countdownTime = countdownTime;
    this.currentTime = 0;
  }

  startTimer() {
    // snippet : seti
    const timer = setInterval(() => {
      this.currentTime++;
      this.emit("update", this.currentTime);

      if (this.currentTime === this.countdownTime) {
        clearInterval(timer);
        this.emit("end");
      }

      if (this.currentTime === this.countdownTime - 2) {
        this.emit("end-soon");
      }
    }, 1000);
  }
}
// As you can see, we can use this.emit() inside the class directly.
// Also, the startTimer() function is used to allow us control over when the countdown starts.
// Otherwise, it would start as soon as the object is created.

// Let's create a new object of CountDown and subscribe to it:

const myCountDown = new CountDown(7);

myCountDown.on("update", (t) => {
  console.log(`${t} seconds since the progarm started`);
});
myCountDown.on("end", () => {
  console.log(`Progarm is completed`);
});
// myCountDown.on("end-soon", () => {
//   console.log(`Program will end in 2 seconds`);
// });

// We could have done the same with addListener() like this:

myCountDown.addListener("end-soon", () => {
  console.log("Count down will be end in 2 seconds");
});

// They both work.
// They're almost like synonyms.
// However, most coders prefer to use on().

// start the event timer
myCountDown.startTimer();

console.log(myCountDown.eventNames());

// terminal output
// C:\Users\donat\Documents\stackabuse-event-emitter>node extendedEmitter
// [ 'update', 'end', 'end-soon' ]
// 1 seconds since the progarm started
// 2 seconds since the progarm started
// 3 seconds since the progarm started
// 4 seconds since the progarm started
// 5 seconds since the progarm started
// Program will end in 2 seconds
// 6 seconds since the progarm started
// 7 seconds since the progarm started
// Progarm is completed
