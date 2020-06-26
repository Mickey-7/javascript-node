class Animal {
  // type name as field attribute of the Animal class
  // then select the whole word name then ctr+shift+r
  // or right click then select refactor and chosse setter and getter
  // the name will become _name -> meaning its private property
  _name;
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }

  // manually create constructor
  constructor(name) {
    this._name = name;
  }
}

// to use setter & getter
// create blank Animal object
let animal1 = new Animal();
// invoke setter like below
animal1.name = "dog";
console.log(animal1);
console.log(animal1.name);
// C:\Users\donat\Documents\stackabuse-classes>node class
// Animal { _name: 'dog' }
// dog

// to use constructor
let animal2 = new Animal("cat");
console.log(animal2);
console.log(animal2.name);
// Animal { _name: 'cat' }
// cat

animal2.name = "kitten";
console.log(animal2);
console.log(animal2.name);
// Animal { _name: 'kitten' }
// kitten
