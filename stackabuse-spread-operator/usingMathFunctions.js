// JavaScript has a Math object which contains several methods to operate with a set of data,
// i.e. a list of data.

// Let us say we want to get the maximum value from first three numbers of a list:

let myList = [10, 23, 83, -1, 92, -33, 76, 100, 644, -633];
let maximum = Math.max(myList[0], myList[1], myList[2]);
console.log(maximum);

// What if we want to get the maximum of all numbers in a list?
// What if the list has n number of items?
// Surely we wont want mylist[0], mylist[1]... mylist[1000].

// The spread operator provides a cleaner solution:
let myList1 = [10, 23, 83, -1, 92, -33, 76, 100, 644, -633];
let maximum1 = Math.max(...myList1);
console.log(maximum1);

// terminal output
// C:\Users\donat\Documents\stackabuse-spread-operator>node usingMathFunctions
// 83
// 644
