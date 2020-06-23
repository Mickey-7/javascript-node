const fs = require("fs");

let student = {
  name: "Mike",
  age: 23,
  gender: "Male",
  department: "English",
  car: "Honda",
};

let data = JSON.stringify(student, null, 2);

fs.writeFile("student-4.json", data, (err) => {
  if (err) throw err;
  console.log("Data written to file");
});

console.log("This is after the write call");

// terminal output
// C:\Users\donat\Documents\stackabuse-read-write-json-files>node usingWriteFile
// This is after the write call
// Data written to file
// student-4.json file will be created
// content of that file will be below
// {
//     "name": "Mike",
//     "age": 23,
//     "gender": "Male",
//     "department": "English",
//     "car": "Honda"
//   }
