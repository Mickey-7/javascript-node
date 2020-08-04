// Properties
// ParentNode.childElementCount
var foo = document.getElementById("foo");
if (foo.childElementCount > 2) {
  console.log(foo.childElementCount);
  // 4
}

// ParentNode.children
var foo1 = document.getElementById("foo");
// snippet : for
for (let i = 0; i < foo1.children.length; i++) {
  console.log(foo1.children[i].innerHTML);
  // One
  // Two
  // Three
  // Four
}

// ParentNode.firstElementChild
console.log(foo1.firstElementChild.textContent);
// One

// ParentNode.lastElementChild
console.log(foo1.lastElementChild.textContent);
// Four

// Methods
// Appending an element
let parent = document.createElement("div");
let p = document.createElement("p");
parent.append(p);
console.log(parent.childNodes);
// NodeList [p]
// 0: p
// length: 1

// Appending text
parent.append("Some Text");
console.log(parent.textContent);
// Some Text
console.log(parent.innerHTML);
// <p></p>Some Text
console.log(parent.outerHTML);
// <div><p></p>Some Text</div>

// Appending an element and text
let span = document.createElement("span");
parent.append(span, "Some text");
console.log(parent.outerHTML);
// <div><p></p>Some Text<span></span>Some text</div>
console.log(parent.childNodes);
// NodeList(4) [p, text, span, text]
// 0: p
// 1: text
// 2: span
// 3: text
// length: 4

// ParentNode.querySelectorAll()
var select = document.querySelectorAll("li");
console.log(select.length);
// 4
console.log("-----------done--------------");
