// Let's start with a simple example to see proxies in action.
// To get started, let's create a person object with firstName, lastName, and age properties:

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 21,
};

// Now let's create a simple proxy by passing it to the Proxy constructor.
// It accepts parameters called the target and the handler.
// Both of these will be elaborated shortly.

// Let's first create a handler object:
const handler = {
  // snippet : func
  get(target, property) {
    console.log(`you have read the property ${property}`);
    return target[property];
  },
};

// This is how you can create a simple proxy:
const proxyPerson = new Proxy(person, handler);

console.log(proxyPerson.firstName);
console.log(proxyPerson.lastName);
console.log(proxyPerson.age);

// terminal output
// C:\Users\donat\Documents\stackabuse-proxy>node proxyExample
// you have read the property firstName
// John
// you have read the property lastName
// Doe
// you have read the property age
// 21

person.age = 17;
console.log(proxyPerson.age);
// you have read the property age
// 17