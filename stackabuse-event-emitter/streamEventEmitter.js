// snipet  : req-fs
const fs = require("fs");
const writer = fs.createWriteStream("example.txt");

for (let i = 0; i < 100; i++) {
  writer.write(`hello #${i}\n`);
}

writer.on("finish", () => {
  console.log(`all writes are now complete`);
});

writer.end(`this is the end\n`);

// However, between the writing operation and the writer.end() call, we've added a listener.
// Streams emit a finished event upon completion. Other events, such as error, pipe and
// unpipe are emitted when an error occurs or a read-stream is piped to or unpiped from a write-stream.
