// snippet : req
const fs = require("fs");
const file = fs.createWriteStream("file.txt");

file.write("hello world");
file.end(", from streams!");
// In this code, we have used the file system module
// to create a writable stream to a file (file.txt)
// and write 2 separate chunks to it: hello world and , from streams.

// Unlike the fs.writeFile() where we need to write the file content at once,
// using a stream we can write the content chunk by chunk.

// To simulate a continuous input, we could do something along the lines of:

// snippet : req
const fs1 = require("fs");
const file1 = fs1.createWriteStream("file1.txt");
for (let i = 0; i < 100; i++) {
  file1.write(`hello world ${i}\n`);
}
file1.end();

// Please remember to .end() your streams after you're done using them,
//  since the finish event is sent after the .end() method has been called.

// This signifies that the stream's body has been flushed into our file.

// open terminal and type : node writableStreams
// will create the .txt files and write in it
