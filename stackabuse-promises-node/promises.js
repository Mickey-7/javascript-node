function hello() {
  console.log("hellow world");
}
setTimeout(hello, 5000);

// creating var for promise
var data = true;

// creating a promise
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (data === true) {
      resolve({ msg: "It works", data: "some data" });
    } else {
      reject({ msg: "It does not work" });
    }
  }, 2000);
});

// consuming a promise
promise
  .then((result) => {
    console.log("Success", result);
  })
  .catch((error) => {
    console.log("Error", error);
  });

//   chaining promises
let promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ msg: "To do some more job" });
  }, 1000);
})
  .then((result) => {
    console.log({ data: "some data", result });
  })
  .then(() => {
    console.log({ data: "some more data" });
  })
  .then(() => {
    console.log({ data: "some other data" });
  });
