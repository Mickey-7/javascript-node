// snippet : func
function remove() {
  // ChildNode.remove()
  alert("remove div two?");
  var el = document.getElementById("two");
  el.remove();
  //   disable button after delete
  document.getElementById("but").disabled = true;
}

// ChildNode.before()
// Inserting an element
var parent1 = document.createElement("div");
var child = document.createElement("p");
parent1.appendChild(child);
var span1 = document.createElement("span");
// insert span before p tag
child.before(span1);
console.log(parent1.outerHTML);
// "<div><span></span><p></p></div>"

// Inserting text
var parent2 = document.createElement("div");
var child1 = document.createElement("p");
// insert Text before p tag
parent2.appendChild(child1);
child1.before("Text");
console.log(parent2.outerHTML);
// <div>Text<p></p></div>

// Inserting an element and text
var parent3 = document.createElement("div");
var child = document.createElement("p");
parent3.appendChild(child);
var span2 = document.createElement("span");
// insert span and Text before p tag, respectively
child.before(span2, "Text");
console.log(parent3.outerHTML);
// <div><span></span>Text<p></p></div>

// ChildNode.after() - same concept as ChildNode.before()

// ChildNode.replaceWith()
var parent4 = document.createElement("div");
var child4 = document.createElement("p");
parent4.appendChild(child4);
var span3 = document.createElement("span");
child4.replaceWith(span3);
console.log(parent4.outerHTML);
// <div><span></span></div>
console.log("-----------done--------------");
