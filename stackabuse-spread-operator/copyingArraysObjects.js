let arr1 = ["John", "Sofia", "Bob"];
let arr2 = arr1;
console.log(arr2);
arr1.push("sally");
console.log(arr2);

// terminal output
// C:\Users\donat\Documents\stackabuse-spread-operator>node copyingArraysObjects
// [ 'John', 'Sofia', 'Bob' ]
// [ 'John', 'Sofia', 'Bob', 'sally' ]

let arr3 = ["John", "Sofia", "Bob"];
let arr4 = [...arr3];
console.log(arr4);
arr3.push("sally");
console.log(arr4);
// [ 'John', 'Sofia', 'Bob' ]
// [ 'John', 'Sofia', 'Bob' ]

// As we can see, the arr4 wasn't passed a reference like before,
// but rather it was populated with the values of arr3 as a whole new object.
// So even when arr3 changes, arr4 remains the same.

// We can also use the spread operator to create a copy of an array
// and add new elements into it at the same time:

let arr5 = ["John", "Sofia", "Bob"];
let arr6 = [...arr5, "Anthony", "Sean"];
console.log(arr6);
// [ 'John', 'Sofia', 'Bob', 'Anthony', 'Sean' ]

// Similarly we can copy objects by using the spread operator:
let o1 = { a: 1, b: 2 };
let o2 = { c: 3, d: 4, ...o1 };
console.log(o2);
// { c: 3, d: 4, a: 1, b: 2 }

// We may also need to merge billing and shipping information into one:
const billing = {
  billingContact: "0987654321",
  billingAddress: "street no 123, xyz city",
};
const shipping = {
  shippingContact: "123456789",
  shippingAddress: "street no 999, xyz city",
};
const custInfo = { ...billing, ...shipping };
console.log(custInfo);
// {
//     billingContact: '0987654321',
//     billingAddress: 'street no 123, xyz city',
//     shippingContact: '123456789',
//     shippingAddress: 'street no 999, xyz city'
//   }

// One question could be raised here.
// What if both objects have some of the same properties.

// In case of clashing properties, the property of the last object wins.
// Let us see this in an example:

const o3 = { a: 1, b: 2 };
const o4 = { b: 3, c: 4, ...o1 };
console.log(o4);
// { b: 2, c: 4, a: 1 }
// However, if we put the spread operator first:
const o5 = { ...o1, b: 3, c: 4 };
console.log(o5);
// { a: 1, b: 3, c: 4 }

// One use case of this feature could be to make default assignments:
const userProvided = {
  name: "Bill Smith",
  email: "bill@example.com ",
};
const defaultValues = {
  name: "Unknown",
  address: "Alien",
  phone: null,
  email: null,
};
const userInfo = { ...defaultValues, ...userProvided };
console.log(userInfo);
// {
//     name: 'Bill Smith',
//     address: 'Alien',
//     phone: null,
//     email: 'bill@example.com '
//   }
