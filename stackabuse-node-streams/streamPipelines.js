// Using stream pipes we can directly pipe readable streams to a writable stream
// without storing the buffer temporarily - so we can save memory space.

// Consider a scenario where a user requests a large file from the server
// and there is no memory space to load it to the memory,
// or the same file is requested by a thousand different clients.
// In this case, we cannot read the content of the file to memory and then write it back to the client.

// This is where the pipe method is useful,
// as we'll pipe a readable stream (a request)
// into a writable stream (a response)
// and serve it to the user without holding it up in the buffer.

// First, let's do this without using streams:

// // snippet : req-fs
// const fs = require("fs");
// // snippet : req-htt
// const http = require("http");

// const server = http.createServer();

// server.on("request", (req, res) => {
//   fs.readFile("./Youtube2.png", (err, data) => {
//     if (err) {
//       throw err;
//     }
//     res.end(data);
//   });
// });

// server.listen(1337);

// type on terminal : node streamPipelines
// type on web browser : http://localhost:1337/request
// the picture will be rendered on the web page

// Now, let's serve the video using a stream:

// snippet : req-fs
const fs = require("fs");
// snippet : req-htt
const http = require("http");

// snippet : nfn
const server = http.createServer((req, res) => {
  const src = fs.createReadStream("./Youtube2.png");
  src.pipe(res);
});

server.listen(1337);
