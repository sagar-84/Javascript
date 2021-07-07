a(); // a called (a is created a memory and the function is assigned to a)
b(); // TypeError: b is not a function (b is treated like any other variable and it is assigned undefined initially)

// Function statement aka Function declaration
// use function declarations when you want to create a function on the global scope and make it available throughout your code.
function a() {
  console.log("a called");
}

// Function Expression
// Use function expressions to limit where the function is available, keep your global scope light, and maintain clean syntax.
var b = function () {
  console.log("b called");
};

// Anonymous Function.
// does not have their own identity
// error: Function statements require a Function name
// They are used in a place where functions are used as values (use it to assign it to a variable)
// function () {

// }

// Named Function Expression
var b = function xyz() {
  console.log(xyz);
};

xyz(); // Reference error: xyz is not defined.

// Difference between parameters and arguments
var b = function (param1, param2) {
  // param1 and param2 are arameters
  console.log("b called", param1, param2);
};
b(1, 2); // 1 and 2 are arguments

// First Class Functions (First Class Citizens)

// Higher-Order Functions
// We can pass functions inside another functions as an arguments (argument is called callback function)
// Also we can return a function from another function.
const radius = [3, 1, 2, 4];

const area = (radius) => Math.PI * radius * radius;
const circumference = (radius) => 2 * Math.PI * radius;
const diameter = (radius) => 2 * radius;

const calculate = (arr, logic) => {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(logic(arr[i]))
  }
  return output;
}
console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));

console.log("Using map", radius.map(area));
// This will give same result i.e, We have written our own implementation of map.

const calculateArea = (radius) => {
  const area = [];
  for (let i = 0; i < radius.length; i++) {
    area.push(Math.PI * radius[i] * radius[i])
  }
  return area;
}
console.log(calculateArea(radius))

const calculateCircumference = (radius) => {
  const circumference = [];
  for (let i = 0; i < radius.length; i++) {
    circumference.push(2 * Math.PI * radius[i])
  }
  return circumference;
}
console.log(calculateCircumference(radius))

const calculateDiameter = (radius) => {
  const diameter = [];
  for (let i = 0; i < radius.length; i++) {
    diameter.push(2 * radius[i])
  }
  return diameter;
}
console.log(calculateDiameter(radius))