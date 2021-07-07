// a closure gives you access to an outer function’s scope from an inner function.
// a function along with it's lexical scope.

function x() {
  var a = 7; // 'a' is a local variable created by x()
  function y() {
    // y() is the inner function, a closure
    console.log(a); // use variable declared in the parent function
  }
  y();
}
x();

function outerFunc() {
  var name = "Mozilla";
  function innerFunc() {
    console.log(name);
  }
  return innerFunc;
}

var myFunc = outerFunc();
myFunc();
// or makeFunc()()

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12

var counter = (function () {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment: function () {
      changeBy(1);
    },

    decrement: function () {
      changeBy(-1);
    },

    value: function () {
      return privateCounter;
    },
  };
})();

console.log(counter.value()); // 0.

counter.increment();
counter.increment();
console.log(counter.value()); // 2.

counter.decrement();
console.log(counter.value()); // 1.

// Uses of closures
// - Module design pattern
// - currying
// - setTimeouts
