// snippet : req
const fs = require("fs");

let writeStream = fs.createWriteStream("secret.txt");

// write some data with a base64 encoding
writeStream.write("aef35ghhjdk74hja83ksnfjk888sfsf", "base64");

// the finish event is emitted when all data has been flushed from the stream
writeStream.on("finish", () => {
  console.log(`wrote all data to file`);
});

writeStream.end();

// open terminal then type  : node createWriteStream
// secret.txt will be created with content in it
// C:\Users\donat\Documents\stackabuse-fs-write-files>node createWriteStream
// wrote all data to file
