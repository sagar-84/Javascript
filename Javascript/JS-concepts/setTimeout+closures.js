function x() {
  var i = 1;
  setTimeout(function () {
    console.log(i);
  }, 2000);
  console.log("Hello World!");
}
x(); // Prints Hello World! and 1

function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
x();
// // Prints
// // 6 6 6 6 6 (after 1, 2, 3, 4, 5 seconds)
// // Why??? Because of closures. Function remembers the reference to i and not the value of i.
// // When the timer expires, it's too late and the value of i became 6.

// // Solution 1 (use let instead of var)
function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
x(); // // let is block scope and it creates a new copy every time the loop is executed.

// Solution 2 (using var)
function x() {
  for (var i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    close(i);
  }
}
x();

// Trust issues with setTimeout
console.log("Start");

setTimeout(function cb() {
  console.log("Callback!");
}, 0);

console.log("End");

// What will the following code output?
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000 + i);
}
// Prints 3 3 times after 1, 1.1, and 1.2 seconds.

// Solution using IIFE
for (var i = 0; i < 3; i++) {
  setTimeout(function (x) {
    return function () {
      console.log(x);
    };
  }(i), 1000 + i);
}
