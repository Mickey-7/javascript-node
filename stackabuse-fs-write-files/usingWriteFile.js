// snippet : fs
const fs = require("fs");

let lyrics =
  "But still I'm having memories of high speeds when the cops crashed\n" +
  "As I laugh, pushin the gas while my Glocks blast\n" +
  "We was young and we was dumb but we had heart";

fs.writeFile("2pac.txt", lyrics, (err) => {
  if (err) {
    throw err;
  }
  console.log("Lyrics saved!");
});

// open terminal then type  : node usingWriteFile
// 2pac.txt will be created with lyrics in it
// C:\Users\donat\Documents\stackabuse-fs-write-files>node usingWriteFile
// Lyrics saved!
