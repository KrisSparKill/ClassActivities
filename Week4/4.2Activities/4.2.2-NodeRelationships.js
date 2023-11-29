// select the root node
const root = document.querySelector("body");
console.log(root);

// select the last child of the root node
const lastChild = document.querySelector("body").lastElementChild;
console.log(lastChild);

root.lastElementChild;

// select all the children of the body element
const allTheChildren = document.querySelector("body").children;
console.log(allTheChildren);

root.children;

// select the next sibling of the h2 node
const h2Sibling = document.querySelector("h2").nextElementSibling;
console.log(h2Sibling);

// select the parent element of the h1 node
const h1Parent = document.querySelector("h1").parentElement;
console.log(h1Parent);
