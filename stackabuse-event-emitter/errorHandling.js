// snippet : req
const { EventEmitter } = require("events");

class CountDown extends EventEmitter {
  // create constructor
  constructor(countdownTime) {
    super();

    if (countdownTime < 2) {
      console.log(countdownTime);
      this.emit(
        "error",
        new Error("value of the countdownTimer cannot be less than 2")
      );
    }

    this.countdownTime = countdownTime;
    this.currentTime = 0;
  }
}

const myCountDown = new CountDown(1);

// terminal output
// C:\Users\donat\Documents\stackabuse-event-emitter>node errorHandling
// 1
// events.js:187
//       throw er; // Unhandled 'error' event
//       ^

// LINE BELOW IS FROM CONSTRUCTOR ABOVE - was separated for visibility

// Error: value of the countdownTimer cannot be less than 2

//     at new CountDown (C:\Users\donat\Documents\stackabuse-event-emitter\errorHandling.js:13:9)
//     at Object.<anonymous> (C:\Users\donat\Documents\stackabuse-event-emitter\errorHandling.js:22:21)
//     at Module._compile (internal/modules/cjs/loader.js:956:30)
//     at Object.Module._extensions..js (internal/modules/cjs/loader.js:973:10)
//     at Module.load (internal/modules/cjs/loader.js:812:32)
//     at Function.Module._load (internal/modules/cjs/loader.js:724:14)
//     at Function.Module.runMain (internal/modules/cjs/loader.js:1025:10)
//     at internal/main/run_main_module.js:17:11
// Emitted 'error' event on CountDown instance at:
//     at new CountDown (C:\Users\donat\Documents\stackabuse-event-emitter\errorHandling.js:11:12)
//     at Object.<anonymous> (C:\Users\donat\Documents\stackabuse-event-emitter\errorHandling.js:22:21)
//     [... lines matching original stack trace ...]
//     at internal/main/run_main_module.js:17:11
