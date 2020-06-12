// Set() constructor

const set1 = new Set([1, 2, 3, 4, 5]);
console.log(set1.has(1));
// true
console.log(set1.has(7));
// false

// --------------------------------------------------------------------------------------------------------------
// Using the Set object

let mySet = new Set();

mySet.add(1);
mySet.add(7);
mySet.add(7);
mySet.add("some text");
let o = {
  a: 1,
  b: 7,
};
mySet.add(o);
mySet.add({ x: 2, y: 4 });
console.log(mySet);
// Set { 1, 7, 'some text', { a: 1, b: 7 }, { x: 2, y: 4 } }

console.log(mySet.size);
// 5
console.log(mySet.delete(1));
// true
console.log(mySet.has(1));
// false

// --------------------------------------------------------------------------------------------------------------
// Iterating Sets

console.log(mySet);
// Set { 7, 'some text', { a: 1, b: 7 }, { x: 2, y: 4 } }
// snippet : forof
for (const item of mySet) {
  console.log(item);
}
// 7
// some text
// { a: 1, b: 7 }
// { x: 2, y: 4 }

// (key and value are the same here)
// snippet : forof
for (const i of mySet.keys()) {
  console.log(i);
}
// 7
// some text
// { a: 1, b: 7 }
// { x: 2, y: 4 }

// snippet : forof
for (const i of mySet.values()) {
  console.log(i);
}
// 7
// some text
// { a: 1, b: 7 }
// { x: 2, y: 4 }

// snippet : forof
for (const [key, value] of mySet.entries()) {
  console.log(key);
  console.log(value);
}
// 7
// 7
// some text
// some text
// { a: 1, b: 7 }
// { a: 1, b: 7 }
// { x: 2, y: 4 }
// { x: 2, y: 4 }

// --------------------------------------------------------------------------------------------------------------

// convert Set object to an Array object, with Array.from
console.log(mySet);
// Set { 7, 'some text', { a: 1, b: 7 }, { x: 2, y: 4 } }
let myArr = Array.from(mySet);
console.log(myArr);
// [ 7, 'some text', { a: 1, b: 7 }, { x: 2, y: 4 } ]

// converting between Set and Array
mySet1 = new Set([1, 2, 3, 4, 5]);
console.log(mySet1);
// Set { 1, 2, 3, 4, 5 }
const arr = [...mySet1];
console.log(arr);
// [ 1, 2, 3, 4, 5 ]

// Iterate set entries with forEach()
// snippet : foreach
mySet1.forEach((element) => {
  console.log(element);
});
// 1
// 2
// 3
// 4
// 5

// --------------------------------------------------------------------------------------------------------------

// Remove duplicate elements from the array
const numbers1 = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];
console.log([...new Set(numbers1)]);
// [
//     2, 3,  4, 5,
//     6, 7, 32
// ]

// Relation with Strings
let text = "India";
let mySet2 = new Set(text);
console.log(mySet2);
// Set { 'I', 'n', 'd', 'i', 'a' }
