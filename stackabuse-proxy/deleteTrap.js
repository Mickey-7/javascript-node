const person = {
  firstName: "John",
  lastName: "Doe",
  age: 21,
  _ssn: "123-45-6789",
};

const handler = {
  deleteProperty(target, property) {
    console.log(`you have been deleted ${property}`);
    delete target[property];
  },
};

const proxyPerson = new Proxy(person, handler);

delete proxyPerson.age;

// to check
console.log(proxyPerson.age);

// terminal output
// C:\Users\donat\Documents\stackabuse-proxy>node deleteTrap
// you have been deleted age
// undefined
