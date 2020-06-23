// Declaring a Template Literal
// JavaScript template literals use the backtick character (`) to declare a string instead of single or double-quotes.

// For example:
let x = `This is a new template literal`;
console.log(x);
// This is a new template literal

// You can use the quotes and double quotes inside the string declaration with template literals:
let y = `This is a string with a 'single quote'`;
let z = `This is a string with a "double quote"`;
console.log(y);
console.log(z);
// This is a string with a 'single quote'
// This is a string with a "double quote"

// Multiline String and Tabs
// With template literals, we can just add a new line inside the declaration itself.
// Instead of using the new line character, we can simply break the code into the next line:

console.log(`This is the first line
This is the second line`);
// This is the first line
// This is the second line

// Expressions with Template Literals (Expression Interpolation)
// Let's populate an object with the same information and then read its values:
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  city: "London",
};
let info = `Name : ${person.firstName}
Age : ${person.age}
City : ${person.city}`;
console.log(info);
// Name : John
// Age : 20
// City : London

// Tagged Template Literals
// Tagged Template Literals provide a more advanced usage of template literals using a customizable function.
// snippet : func
function exampleTag(personExp, marksExp) {
  let resultStr;
  if (marksExp >= 50) {
    resultStr = "paseed";
  } else {
    resultStr = "failed";
  }
  return `${personExp} had ${resultStr}`;
}
// Let's make a couple of people and pass them to the function:
let p1 = {
  person: "john",
  marks: 45,
};
let p2 = {
  person: "Ann",
  marks: 67,
};
let ex1 = exampleTag(p1.person, p1.marks);
let ex2 = exampleTag(p2.person, p2.marks);
console.log(ex1);
console.log(ex2);
// john had failed
// Ann had paseed
