const encoder = new TextEncoder();
const view = encoder.encode("encoded");
console.log(view);
// Uint8Array(7) [101, 110, 99, 111, 100, 101, 100]

let decoder = new TextDecoder();
let bytes = new Uint8Array([101, 110, 99, 111, 100, 101, 100]);
console.log(decoder.decode(bytes));
// encoded
console.log("-------done------");
