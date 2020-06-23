// snippet : req
const fs = require("fs");

let rawData = fs.readFileSync("student.json");
console.log(rawData);
// This is where the JSON.parse function comes into play.
// This function handles parsing the raw data, converts it to ASCII text,
// and parses the actual JSON data in to a JavaScript object.
// let student = JSON.parse(rawData);
let student = JSON.parse(rawData);
console.log(student);

// termainal output
// C:\Users\donat\Documents\stackabuse-read-write-json-files>node usingReadFileSync
// <Buffer 7b 0d 0a 20 20 22 6e 61 6d 65 22 3a 20 22 53 61 72 61 22 2c 0d 0a 20 20 22 61 67 65 22 3a 20 32 33 2c 0d 0a 20 20 22 67 65 6e 64 65 72 22 3a 20 22 46 ... 58 more bytes>
// {
//   name: 'Sara',
//   age: 23,
//   gender: 'Female',
//   department: 'History',
//   car: 'Honda'
// }
