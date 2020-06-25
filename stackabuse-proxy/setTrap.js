const person = {
  firstName: "John",
  lastName: "Doe",
  age: 177,
  _ssn: "123-45-6789",
};

const handler = {
  set(target, property, value) {
    if (property === "age") {
      if (!(typeof value === "number")) {
        throw new Error(`age should be a number`);
      }

      if (value < 0 || value > 150) {
        throw new Error("Age value should be in between 0 and 150");
      }
    }
    target[property] = value;
  },
};

// As you can see in this code, the set() trap accepts three parameters, which are:

// target: The target object that the proxy attached to
// property: The name of the property being set
// value: The value which is assigned to the property

// In this trap, we have checked if the property name is age, and if so,
//  if it's also a number and value is between 0 and 150 - throwing an error if it's not.

const proxyPerson = new Proxy(person, handler);
proxyPerson.age = 170;

// termianl output
// C:\Users\donat\Documents\stackabuse-proxy>node setTrap
// C:\Users\donat\Documents\stackabuse-proxy\setTrap.js:16
//         throw new Error("Age value should be in between 0 and 150");
//         ^

// Error: Age value should be in between 0 and 150                                  -> throw Error on the code
//     at Object.set (C:\Users\donat\Documents\stackabuse-proxy\setTrap.js:16:15)
//     at Object.<anonymous> (C:\Users\donat\Documents\stackabuse-proxy\setTrap.js:24:17)
//     at Module._compile (internal/modules/cjs/loader.js:956:30)
//     at Object.Module._extensions..js (internal/modules/cjs/loader.js:973:10)
//     at Module.load (internal/modules/cjs/loader.js:812:32)
//     at Function.Module._load (internal/modules/cjs/loader.js:724:14)
//     at Function.Module.runMain (internal/modules/cjs/loader.js:1025:10)
