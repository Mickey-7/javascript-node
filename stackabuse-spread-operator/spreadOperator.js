// As we learned, the spread operator expands the contents of an iterable.
// In contrast, the rest operator collects all the remaining elements into an array.

// snippet : func
function doSum(...items) {
  let sum = 0;
  // snippet : foro
  for (const item of items) {
    sum += item;
  }
  return sum;
}

console.log(doSum(1));
console.log(doSum(1, 2));
console.log(doSum(1, 2, 3, 4));
// 1
// 3
// 10

// As we can see, everytime the remaining elements were collected by the Rest Parameter.

// We can also provide distinct variables for some of the elements and
// make the rest parameter collect the rest of the items.
// The only condition is that the rest parameter should always be the last parameter of the function:

// snippet : func
function doSum(times, ...items) {
  let sum = 0;
  // snippet : foro
  for (const item of items) {
    sum += item * times;
  }
  return sum;
}

console.log(doSum(1, 1));
console.log(doSum(2, 1, 2));
console.log(doSum(3, 1, 2, 3));
// 1
// 6
// 18
