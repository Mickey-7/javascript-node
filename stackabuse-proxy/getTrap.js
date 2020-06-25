const person = {
  firstName: "John",
  lastName: "Doe",
  age: 21,
  _ssn: "123-45-6789",
};

const handler = {
  get(target, property) {
    if (property[0] === "_") {
      throw new Error(`${property} is a private property`);
    }
    return target[property];
  },
};

const proxyPerson = new Proxy(person, handler);

console.log(proxyPerson._ssn);

// terminal output
// C:\Users\donat\Documents\stackabuse-proxy>node getTrap
// C:\Users\donat\Documents\stackabuse-proxy\getTrap.js:11
//       throw new Error(`${property} is a private property`);
//       ^

// Error: _ssn is a private property                                                    -> throw Error on code
//     at Object.get (C:\Users\donat\Documents\stackabuse-proxy\getTrap.js:11:13)
//     at Object.<anonymous> (C:\Users\donat\Documents\stackabuse-proxy\getTrap.js:19:25)
//     at Module._compile (internal/modules/cjs/loader.js:956:30)
//     at Object.Module._extensions..js (internal/modules/cjs/loader.js:973:10)
//     at Module.load (internal/modules/cjs/loader.js:812:32)
//     at Function.Module._load (internal/modules/cjs/loader.js:724:14)
//     at Function.Module.runMain (internal/modules/cjs/loader.js:1025:10)
//     at internal/main/run_main_module.js:17:11
