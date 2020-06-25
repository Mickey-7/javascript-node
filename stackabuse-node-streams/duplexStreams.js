// Duplex Streams
// With both writable and readable streams out of the way,
// we can jump into an example using duplex streams
// - which essentially combine both.

// We'll be demonstrating them using a simple HTTP server
// built using Node.js' native http module.
// The example used here is from the official Node.js documentation.

// Since servers receive requests and then send responses,
// they're a good example for duplex streams, which handle both
// - a readable stream will act as a continuous request
// and a writable stream will act as a response.

// First, let's import the HTTP module:
// snippet : req
const http = require("http");

// Now let's create a simple HTTP server:
// snippet : nfn
const server = http.createServer((req, res) => {
  // `req` is an http.IncomingMessage, which is a Readable Stream.
  // `res` is an http.ServerResponse, which is a Writable Stream.

  let body = "";

  // Get the data as utf8 strings.
  // If an encoding is not set, Buffer objects will be received.
  req.setEncoding("utf8");

  // Readable streams emit 'data' events once a listener is added.
  req.on("data", (chunk) => {
    body += chunk;
  });

  // The 'end' event indicates that the entire body has been received.
  req.on("end", () => {
    console.log(body);

    // snippet : try
    try {
      res.write("hello world");
      res.end;
    } catch (error) {
      res.statusCode = 400;
      return res.end(`error : ${error.message}`);
    }
  });
});

// The req parameter is a readable stream,
// which we will process upon receiving as an HTTP request.
// We'll then send res as a response, which is, again, a simple writable stream.

// Then, using the .on() method, we read the body of the request in chunks
// of 64KB and store it into the body, triggered by the data event.

// Please note the use of the setEncoding() method before reading from the stream.

// This way, the stream will emit strings and it would emit Buffer objects otherwise.
// Though, you can also perform that conversation inside the data event callback if you prefer.

// The end event is triggered when there is nothing left to read in a readable stream.
// We will talk about other useful events later in this article.

// Now, let's listen to the server:

server.listen(1337);

// open terminal and type : node duplexStreams
// Hitting http://localhost:1337 on web browser,
// you should see a simple Hello World response from the HTTP server.
