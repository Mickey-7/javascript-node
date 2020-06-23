let greet = ["hello", "world"];
console.log(greet);
console.log(...greet);

// terminal output
// C:\Users\donat\Documents\stackabuse-spread-operator>node expandingArrays
// [ 'hello', 'world' ]
// hello world

let greetigns = "hello";
let chars = [...greetigns];
console.log(chars);
// [ 'h', 'e', 'l', 'l', 'o' ]
