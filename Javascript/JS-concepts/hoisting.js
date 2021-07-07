// let and const declarations are hoisted.
console.log(b); // undefined
console.log(a); // ReferenceError: a is not defined (Temporal dead zone - phase from hoisting till it's initialized with some value)
let a = 10;
var b = 100;
// let a = 100; // SyntaxError: Identifier 'a' has already been declared

var b = 200;
console.log(b)