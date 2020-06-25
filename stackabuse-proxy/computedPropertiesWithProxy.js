const person = {
  firstName: "John",
  lastName: "Doe",
};

// Then we can create a handler with the get() trap
// to return the calculated full name,
// which is achieved by creating a proxy of the person:
const handler = {
  get(target, property) {
    if (property === "fullName") {
      return `${target.firstName} ${target.lastName}`;
    }
    return target[property];
  },
};

const proxyPerson = new Proxy(person, handler);
// Now let's try accessing the full name of the proxy person:

console.log(proxyPerson.fullName);
// C:\Users\donat\Documents\stackabuse-proxy>node computedPropertiesWithProxy
// John Doe

// Now, let's see another example that's more dynamic
// than what we've encountered thus far.
// This time instead of a returning just a property,
// we will return a function that is dynamically c
// reated based on the given function name.

// Consider an array of people, where each object has an id of the person,
// name of the person and the age of the person.
// We need to query a person by the id, name, or age.
// So simply we can create few methods, getById, getByName, and getByAge.
// But this time we are going to take things somewhat further.

// We want to create a handler that can do this for an array which may have any property.
// For example, if we have an array of books and each book has a property isbn,
// we should also be able to query this array using getByIsbn
// and the method should be dynamically generated on the runtime.

const people = [
  {
    id: 1,
    name: "John Doe",
    age: 21,
  },

  {
    id: 2,
    name: "Ann Clair",
    age: 24,
  },

  {
    id: 3,
    name: "Sherlock Holmes",
    age: 35,
  },
];

// Now let's create a get trap to generate the dynamic function according to the function name.

// snippet : nfn
const proxyPeople = new Proxy(people, {
  get(target, property) {
    if (property.startsWith("getBy")) {
      let prop = property.replace("getBy", "").toLowerCase();

      return function (value) {
        for (const i of target) {
          if (i[prop] === value) {
            return i;
          }
        }
      };
    }
    return target[property];
  },
});

console.log(proxyPeople.getById(1));
// C:\Users\donat\Documents\stackabuse-proxy>node computedPropertiesWithProxy
// John Doe
// { id: 1, name: 'John Doe', age: 21 }

console.log(proxyPeople.getByName("Ann Clair"));
// { id: 2, name: 'Ann Clair', age: 24 }

console.log(proxyPeople.getByAge(35));
// { id: 3, name: 'Sherlock Holmes', age: 35 }
