// snippet : req
const fs = require("fs");

let student = {
  name: "Mike",
  age: 23,
  gender: "Male",
  department: "English",
  car: "Honda",
};

let data = JSON.stringify(student);
fs.writeFileSync("student-2.json", data);

// In the above example we are storing our JSON object student to a file named "student-2.json".
// Notice that here we have to use the JSON.stringify function before saving the data.
// Just like we needed to parse the data into JSON format when we read the JSON file,
// we need to "stringify" the data before we can store it in a string form in the file.

// type on terminal : node usingWriteFileSync
// student-2.json file will be created with content
// {"name":"Mike","age":23,"gender":"Male","department":"English","car":"Honda"}

// Here we are telling the method to add newlines and a couple of indentations to the serialized JSON
let data1 = JSON.stringify(student, null, 2);
fs.writeFileSync("student-3.json", data1);
// type on terminal : node usingWriteFileSync
// student-3.json file will be created with content
// {
//     "name": "Mike",
//     "age": 23,
//     "gender": "Male",
//     "department": "English",
//     "car": "Honda"
// }
