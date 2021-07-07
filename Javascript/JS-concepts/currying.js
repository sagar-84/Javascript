//Currying is an advanced technique of working with functions.
//Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).
let multiply = (a, b) => {
  console.log(a * b);
};

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);

let multiplyUsingClosure = function (a) {
  return function (b) {
    console.log(a * b);
  };
};

let multiplyByTwoClosure = multiplyUsingClosure(2);
multiplyByTwoClosure(5);
