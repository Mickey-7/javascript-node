// snippet : req
const fs = require("fs");

// specify the path to the file, and create a buffer with characters we want to write
let path = "ghetto_gospel.txt";
let buffer = new Buffer.from(
  "Those who wish to follow me\nI welcome with my hands\nAnd the red sun sinks at last"
);

// open the file in writing mode, adding a callback function where we do the actual writing
fs.open(path, "w", function (err, fd) {
  if (err) {
    throw `could not open file : ${err}`;
  }
  // write the contents of the buffer, from position 0 to the end,
  // to the file descriptor returned in opening our file
  fs.write(fd, buffer, 0, buffer.length, null, function (err) {
    if (err) {
      throw `error writing file : ${err}`;
    }
    fs.close(fd, function () {
      console.log(`wrote the file successfully!`);
    });
  });
});

// open terminal then type  : node usingWrite
// ghetto_gospel.txt will be created with content in it
// C:\Users\donat\Documents\stackabuse-fs-write-files>node usingWrite
// wrote the file successfully!
