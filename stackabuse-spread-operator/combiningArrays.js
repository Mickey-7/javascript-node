let blog1Subscribers = ["billy@example.com", "sally@gmail.com"];
let blog2Subscribers = [
  "timmy@gmail.com",
  "tammy@example.com",
  "tommy@gmail.com",
];

let subscribers = [...blog1Subscribers, ...blog2Subscribers];
console.log(subscribers);

// terminal output
// C:\Users\donat\Documents\stackabuse-spread-operator>node combiningArrays
// [
//   'billy@example.com',
//   'sally@gmail.com',
//   'timmy@gmail.com',
//   'tammy@example.com',
//   'tommy@gmail.com'
// ]

let arr1 = ["John", "Sofia", "Bob"];
let arr2 = ["Julia", "Sean", "Anthony"];
arr2.push(...arr1);
console.log(arr2);
// [ 'Julia', 'Sean', 'Anthony', 'John', 'Sofia', 'Bob' ]
