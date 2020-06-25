const person = {
  firstName: "Sherlock",
  lastName: "Holmes",
};

// snippet : nfn
const getFullName = (person) => {
  return `${person.firstName} ${person.lastName} `;
};

// snippet : nfn
const getFullNameProxy = new Proxy(getFullName, {
  apply(target, thisArg, args) {
    return target(...args).toLocaleUpperCase();
  },
});

console.log(getFullNameProxy(person));

// termainal output
// C:\Users\donat\Documents\stackabuse-proxy>node applyTrap
// SHERLOCK HOLMES
