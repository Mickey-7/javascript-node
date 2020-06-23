// snippet : req
const jsonData = require("./student.json");

console.log(jsonData);

// terminal output
// C:\Users\donat\Documents\stackabuse-read-write-json-files>node usingReadFile
// {
//   name: 'Sara',
//   age: 23,
//   gender: 'Female',
//   department: 'History',
//   car: 'Honda'
// }

// However there are a few drawbacks of require function:

// Require is synchronous function and is called only once,
// which means the calls receive a cached result.
// If the file is updated you can't re-read it using this method

// Your file must have '.json' extension, so it can't be as flexible.
// Without the proper extension require doesn't treat the file as JSON file.
