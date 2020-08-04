// URL
const url = new URL("../cats", "http://www.example.com/dogs");
console.log(url.hostname);
console.log(url.pathname);
console.log(url.href);
// www.example.com
// /cats
// http://www.example.com/cats
