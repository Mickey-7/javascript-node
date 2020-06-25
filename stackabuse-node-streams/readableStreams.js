// Now let's take a look at another simple example by reading a file using a stream.
// We can read a file chunk by chunk, instead of reading
// the full content in to memory, using a readable stream:

// snippet : req
const fs = require("fs");
const readableStream = fs.createReadStream("./file.txt", {
  highWaterMark: 10,
});

readableStream.on("readable", () => {
  process.stdout.write(`[${readableStream.read()}]`);
});

readableStream.on("end", () => {
  console.log("DONE");
});

// Similar to creating a writable stream,
// we've created a readable stream by calling
// the .createReadStream() method.

// While buffering (segmenting the data into chunks),
// the size of the buffer depends on the highWaterMark parameter,
// which is passed to the stream constructor.

// The default value of this parameter is 16384 bytes (16kb)
// so if you don't override the parameter,
// the stream will read 16kb chunks and pass them to you to process.

// Since we are using a small text file
// it makes more sense to use a small value for our example,
// so the text will be chucked by 10 characters.

// In our example above, we simply printed the chunk of data we received,
// except with brackets around it so that you can easily see the different chunks.

// open terminal and type : node readableStreams
// terminal output
// C:\Users\donat\Documents\stackabuse-node-streams>node readableStreams
// [hello worl][d, from st][reams!][null]DONE
