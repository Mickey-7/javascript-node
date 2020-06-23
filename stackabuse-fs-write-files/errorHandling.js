// snippet : req-fs
const fs = require("fs");

// add a line to a lyric file, using appendFile
fs.appendFile("empireState.txt", "\nRight there up on Broadway", (err) => {
  if (err) {
    throw err;
  }
  console.log(`the lyrics were updated!`);
});

// Here, we are using appendFile to add an extra line to a file holding the following lyrics:

// create empireState.txt file with below lyrics

// empirestate.txt

// Empire State of Mind - JAY-Z

// I used to cop in Harlem;
// hola, my Dominicanos

// Using fs.appendFile does not overwrite the file, but updates it from the end position,
// with the new data we append. This is a useful feature when you just want to update a file,
// such as continuously adding data to a single log file.

// terminal output
// C:\Users\donat\Documents\stackabuse-fs-write-files>node errorHandling
// the lyrics were updated!

// empireState.txt content
// Empire State of Mind - JAY-Z

// I used to cop in Harlem;
// hola, my Dominicanos
// Right there up on Broadway
