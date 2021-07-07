// Does not have its own bindings to `this` or `super`. (`this` resolves lexically => `this` value inside of an arrow function always equals `this` value from the outer function.)
// Not suitable for call, apply and bind methods, which generally rely on establishing a scope.
// Arrow function cannot be used as a constructor. (because of this resolved lexically)
// Does not have arguments.
// If the arrow function contains one expression, and you omit the function’s curly braces, then the expression is implicitly returned

// Arrow functions used as methods
var obj = {
  // does not create a new scope
  i: 10,
  b: () => console.log(this.i, this),
  c: function () {
    console.log(this.i, this);
  },
};

obj.b(); // prints undefined, Window {...} (or the global object)
obj.c(); // prints 10, Object {...}

//call, apply and bind
var obj = {
  num: 100,
};

// Setting "num" on window to show how it is NOT used.
window.num = 2020;

// A simple traditional function to operate on "this"
var add = function (a, b, c) {
  return this.num + a + b + c;
};

// call
var result = add.call(obj, 1, 2, 3); // establishing the scope as "obj"
console.log(result); // result 106

// apply
const arr = [1, 2, 3];
var result = add.apply(obj, arr); // establishing the scope as "obj"
console.log(result); // result 106

// bind
var result = add.bind(obj); // establishing the scope as "obj"
console.log(result(1, 2, 3)); // result 106

// Arrow Function
var add = (a, b, c) => this.num + a + b + c;

// call
console.log(add.call(obj, 1, 2, 3)); // result 2026

// apply
const arr = [1, 2, 3];
console.log(add.apply(obj, arr)); // result 2026

// bind
const bound = add.bind(obj);
console.log(bound(1, 2, 3)); // result 2026

//Basic usage
var simple = (a) => (a > 15 ? 15 : a);
simple(16); // 15
simple(10); // 10

let max = (a, b) => (a > b ? a : b);

// Easy array filtering, mapping, ...

var arr = [5, 6, 13, 0, 1, 18, 23];

var sum = arr.reduce((a, b) => a + b);
// 66

var even = arr.filter((v) => v % 2 == 0);
// [6, 0, 18]

var double = arr.map((v) => v * 2);
// [10, 12, 26, 0, 2, 36, 46]

// https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/
