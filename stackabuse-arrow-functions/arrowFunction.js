let greetings = {
  msg: "hello world",
  greet: function () {
    console.log(this.msg);
  },
};
greetings.greet();
// C:\Users\donat\Documents\stackabuse-arrow-functions>node arrowFunction
// hello world

// The 'this' Operator and Arrow Functions in ES6
// First, let us convert the anonymous function inside map() to an arrow function:

let factory = {
  items: [5, 1, 12],
  double: function () {
    return this.items.map((item, index) => {
      let value = item * 2;
      console.log(`${value} is the double of ${this.items[index]}`);
    });
  },
};

factory.double();
// C:\Users\donat\Documents\stackabuse-arrow-functions>node arrowFunction
// 10 is the double of 5
// 2 is the double of 1
// 24 is the double of 12
