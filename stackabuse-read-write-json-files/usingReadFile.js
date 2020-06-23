// snippet : req
const fs = require("fs");

fs.readFile("student.json", (err, data) => {
  if (err) {
    throw err;
  }
  let student = JSON.parse(data);
  console.log(student);
});

console.log(`this is after the read call`);

// terminal output
// C:\Users\donat\Documents\stackabuse-read-write-json-files>node usingReadFile
// this is after the read call
// {
//   name: 'Sara',
//   age: 23,
//   gender: 'Female',
//   department: 'History',
//   car: 'Honda'
// }
