// Using the Map object

let myMap = new Map();

let keyString = "a string";
let keyObject = {};
let keyFunction = () => {};

myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObject, "value associated with keyObject");
myMap.set(keyFunction, "value associated with keyFunction");

console.log(myMap.get(keyString));
console.log(myMap.get(keyObject));
console.log(myMap.get(keyFunction));
// value associated with 'a string'
// value associated with keyObject
// value associated with keyFunction

// --------------------------------------------------------------------------------------------------------------

// Iterating Map with for..of
let myMap2 = new Map();
myMap2.set(0, "zero");
myMap2.set(1, "one");
myMap2.set(2, "two");

// snippet : forof
for (const [key, value] of myMap2) {
  console.log(`${key} = ${value}`);
}
// 0 = zero
// 1 = one
// 2 = two

// snippet : forof
for (let key of myMap2.keys()) {
  console.log(key);
}
// 0
// 1
// 2

// snippet : forof
for (let value of myMap2.values()) {
  console.log(value);
}
// zero
// one
// two

// snippet : forof
for (let [key, value] of myMap2.entries()) {
  console.log(key + " = " + value);
}
// 0 = zero
// 1 = one
// 2 = two

// Iterating Map with forEach()
myMap2.forEach((key, value) => {
  console.log(`${key} = ${value}`);
  console.log(`${value} = ${key}`);
});
// zero = 0
// 0 = zero
// one = 1
// 1 = one
// two = 2
// 2 = two
