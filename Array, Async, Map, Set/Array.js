// Common operations

// Create an Array
let fruits = ["Apple", "Banana"];
console.log(fruits.length);
// 2

// Access an Array item using the index position
let first = fruits[0];
let last = fruits[fruits.length - 1];
console.log(first);
console.log(last);
// Apple
// Banana

// Loop over an Array
fruits.forEach((value, index) => {
  console.log(value, index);
});
// Apple 0
// Banana 1

// Add an item to the end of an Array
fruits.push("Orange");
console.log(fruits);
// [ 'Apple', 'Banana', 'Orange' ]

// Remove an item from the end of an Array
fruits.pop();
console.log(fruits);
// [ 'Apple', 'Banana' ]

// Remove an item from the beginning of an Array
fruits.shift();
console.log(fruits);
// [ 'Banana' ]

// Add an item to the beginning of an Array
fruits.unshift("Strawberry");
console.log(fruits);
// [ 'Strawberry', 'Banana' ]

// Find the index of an item in the Array
let index = fruits.indexOf("Banana");
console.log(index);
// 1

// Remove items from an index position
let vegetables = ["Cabbage", "Turnip", "Radish", "Carrot"];
console.log(vegetables);
// [ 'Cabbage', 'Turnip', 'Radish', 'Carrot' ]
let removeItems = vegetables.splice(1, 2);
console.log(vegetables);
// [ 'Cabbage', 'Carrot' ]
console.log(removeItems);
// [ 'Turnip', 'Radish' ]

// Copy an Array
let copy = vegetables.slice();
console.log(copy);
// [ 'Cabbage', 'Carrot' ]

// ---------------------------------------------------------------------------------------------------------
// Accessing array elements

let arr = [
  "this is first element",
  "this is second element",
  "this is third element",
];
console.log(arr[0]);
// this is first element
console.log(arr[1]);
// this is second element
console.log(arr[arr.length - 1]);
// this is third element

// ---------------------------------------------------------------------------------------------------------
// Relationship between length and numerical properties

const fruities = [];
fruities.push("Banana", "Apple", "Peach");
console.log(fruities);
// [ 'Banana', 'Apple', 'Peach' ]
console.log(fruities.length);
// 3
console.log(Object.keys(fruities));
// [ '0', '1', '2' ]

// ---------------------------------------------------------------------------------------------------------
// Constructor - Array()

// Array constructor with a single parameter
let fruits1 = new Array(2);
console.log(fruits1.length);
// 2
console.log(fruits1[0]);
// undefined

// Array constructor with multiple parameters
let fruits2 = new Array("Apple", "Banana");
console.log(fruits2.length);
// 2
console.log(fruits2[0]);
// "Apple"

// ---------------------------------------------------------------------------------------------------------
// Static methods - Array.from(), Array.isArray(), Array.of()

// Array.from()
console.log(Array.from("eminem"));
// [ 'e', 'm', 'i', 'n', 'e', 'm' ]
console.log(Array.from([1, 2, 3], (i) => i + i));
// [ 2, 4, 6 ]

// Array.isArray()
console.log(Array.isArray([1, 2, 3]));
// true
console.log(Array.isArray({ foo: 123 }));
// false
console.log(Array.isArray("foobar"));
// false
console.log(Array.isArray(undefined));
// false

// Array.of()
console.log(Array.of(7));
// [ 7 ]
console.log(Array.of(1, 2, 3));
// [ 1, 2, 3 ]
console.log(Array(7));
// [ <7 empty items> ]
console.log(Array(1, 2, 3));
// [ 1, 2, 3 ]

// ---------------------------------------------------------------------------------------------------------
// Instance methods

// Array.prototype.entries()
const array1 = ["a", "b", "c"];
console.log(array1);
// [ 'a', 'b', 'c' ]
const indexValue = array1.entries();
for (let i = 0; i < array1.length; i++) {
  console.log(indexValue.next(i).value);
}
// [ 0, 'a' ]
// [ 1, 'b' ]
// [ 2, 'c' ]

// Array.prototype.every()
const cond = (val) => val < 40;
const array2 = [1, 30, 39, 29, 10, 13];
console.log(array2.every(cond));
// true

// Array.prototype.filter()
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const result = words.filter((word) => word.length > 6);
console.log(result);
// [ 'exuberant', 'destruction', 'present' ]

// Array.prototype.find() - returns the value of the first element
// in the provided array that satisfies the provided testing function.
const array3 = [2, 5, 12, 8, 130, 44];
const found = array3.find((i) => i > 10);
console.log(found);
// 12

// Array.prototype.findIndex() - returns the index of the first element
//  in the array that satisfies the provided testing function.
// Otherwise, it returns -1, indicating that no element passed the test.
const array4 = [5, 12, 8, 130, 44];
const cond1 = (i) => i > 13;
console.log(array4.findIndex(cond1));
// 3

// Array.prototype.forEach()
const array5 = ["a", "b", "c"];
array5.forEach((x) => console.log(x));
// a
// b
// c

// Array.prototype.includes()
const array11 = [1, 2, 3];
console.log(array11.includes(2));
// expected output: true
const pets = ["cat", "dog", "bat"];
console.log(pets.includes("cat"));
// expected output: true
console.log(pets.includes("at"));
// expected output: false

// Array.prototype.indexOf()
const beasts = ["ant", "bison", "camel", "duck", "bison"];
console.log(beasts.indexOf("bison"));
// expected output: 1
console.log(beasts.indexOf("bison", 2));
// start from index 2
// expected output: 4
console.log(beasts.indexOf("giraffe"));
// expected output: -1

// Array.prototype.join() - creates and returns a new string
// by concatenating all of the elements in an array,
// separated by commas or a specified separator string.
const elements = ["Fire", "Water", "Air"];
console.log(elements.join());
// Fire,Water,Air
console.log(elements.join(""));
// FireWaterAir
console.log(elements.join("-"));
// Fire-Water-Air

// Array.prototype.keys()
const array12 = ["a", "b", "c"];
const iterator = array12.keys();

for (const key of iterator) {
  console.log(key);
}
// expected output: 0
// expected output: 1
// expected output: 2

// Array.prototype.map()
const array13 = [1, 4, 9, 16];
// pass a function to map
const map1 = array13.map((x) => x * 2);
console.log(map1);
// expected output: Array [2, 8, 18, 32]

// Array.prototype.reduce()
const array14 = [1, 2, 3, 4];
const reducer = (accumulator, initialValue) => accumulator + initialValue;
console.log(array14.reduce(reducer));
// 10
console.log(array14.reduce(reducer, 5));
// 15

// Array.prototype.sort()
const months = ["March", "Jan", "Feb", "Dec"];
console.log(months.sort());
// expected output: Array ["Dec", "Feb", "Jan", "March"]
const array15 = [1, 30, 4, 21, 100000];
console.log(array15.sort());
// expected output: Array [1, 100000, 21, 30, 4]

// Array.prototype.splice()
// changes the contents of an array by removing or replacing
// existing elements and/or adding new elements in place.
const months1 = ["March", "Jan", "Feb", "Dec"];
// .splice(start, deleteCount, string)
// insert Feb @ index 1, delete 0,
months1.splice(1, 0, "Feb");
console.log(months1);
// [ 'March', 'Feb', 'Jan', 'Feb', 'Dec' ]
// insert May @ index 4, delete value @ index 4
months1.splice(4, 1, "May");
console.log(months1);
// [ 'March', 'Feb', 'Jan', 'Feb', 'May' ]

// Array.prototype.toLocaleString()
const array16 = [1, "a", new Date()];
const localString = array16.toLocaleString();
console.log(localString);
// 1,a,6/12/2020, 6:06:49 PM

// Array.prototype.toString()
const array17 = [1, 2, "a", "1a"];
console.log(array17.toString());
// 1,2,a,1a

// Array.prototype.values()
const array71 = ["a", "b", "c"];
const iterator7 = array71.values();
for (const value of iterator7) {
  console.log(value);
}
// expected output: "a"
// expected output: "b"
// expected output: "c"

// Remove duplicate elements from the array
const numbers1 = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];
console.log([...new Set(numbers1)]);
// [
//     2, 3,  4, 5,
//     6, 7, 32
// ]
