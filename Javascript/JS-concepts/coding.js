// Given a string, reverse each word in the sentence
// For example Welcome to this Javascript Guide! should be become emocleW ot siht tpircsavaJ !ediuG
function reverseString1(str) {
  let output1 = str.split("").reverse().join(""); // Output becomes !ediuG tpircsavaJ siht ot emocleW
  let output2 = output1.split(" ").reverse().join(" "); // Output becomes emocleW ot siht tpircsavaJ !ediuG
  console.log(output2);
}

reverseString1("Welcome to this Javascript Guide!");

// reverseString without using inbuild methods
function reverseString2(str) {
  let output = [];

  for (let i = str.length - 1; i >= 0; i--) {
    output.push(str[i]);
  }
  return output.join("");
}

reverseString2("Welcome to this Javascript Guide!");

// How to check if an input is an array or not? Provide some code.
function is_array(input) {
  if (Object.prototype.toString.call(input) === "[object Array]") {
    return true;
  }
  return false;
}
console.log(is_array("w3resource"));
console.log(is_array([1, 2, 4, 0]));

// Given two strings, return true if they are anagrams of one another
// For example: Mary is an anagram of Army
function isAnagram(first, second) {
  let output1 = first.toLowerCase().split("").sort().join("");
  let output2 = second.toLowerCase().split("").sort().join("");
  return output1 == output2;
}

let str1 = "Mary";
let str2 = "Army";

console.log(isAnagram(str1, str2));

// Object.freeze()
let person = {
  name: "Leonardo",
};
let animal = {
  species: "snake",
};
Object.freeze(person);
person.name = "Lima"; //TypeError: Cannot assign to read only property 'name' of object
console.log(person);

//enums
var DaysEnum = {
  monday: 1,
  tuesday: 2,
  wednesday: 3,
};
Object.freeze(DaysEnum);

// sum(1)(2)(3)
//approach 1
let sum1 = (a) => {
  return (b) => {
    return (c) => {
      console.log(a + b + c);
    };
  };
};

// sum(1)(2)(3)
// approach 2 (recursive approach)
let sum2 = function (a) {
  return function (b) {
    if (b) {
      return sum2(a + b);
    }
    return a;
  };
};
// let sum2 = (a) => (b) => (b ? sum2(a + b) : a);

sum1(1)(2)(3);
console.log(sum2(1)(2)(3)(4)());

// Given 2 strings, s1="calendar", s2="lendarca", find if s2 is rotated string of s1
// https://www.codesdope.com/blog/article/checking-if-strings-are-rotations-of-each-other/
function rotatedString(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }
  const temp = str1.concat(str1);
  if (temp.includes(str2)) {
    return true;
  } else {
    return false;
  }
}

console.log(rotatedString("calendar", "lendarca")); // true

// Given an array, re-order the array such that the positive numbers and negative numbers appear at alternative array indices.
// Utility function to right rotate all elements between [outofplace, cur]
function rightRotate(arr, outofplace, cur) {
  let tmp = arr[cur];

  for (let i = cur; i > outofplace; i--) {
    arr[i] = arr[i - 1];
  }
  arr[outofplace] = tmp;
}

function rearrange(arr) {
  let outofplace = -1;
  for (let index = 0; index < arr.length; index++) {
    if (outofplace >= 0) {
      if ((arr[index] >= 0 && arr[outofplace] < 0) || (arr[index] < 0 && arr[outofplace] >= 0)) {
        rightRotate(arr, outofplace, index);
        if (index - outofplace >= 2) {
          outofplace = outofplace + 2
        } else {
          outofplace = -1
        };
      }
    }
    if (outofplace == -1) {
      if ((arr[index] >= 0 && (index % 2) == 0) || (arr[index] < 0 && (index % 2) == 1)) {
        outofplace = index;
      }
    }
  }
  return arr;
}

let arr = [-1,3,2,4,5,-6,7,-9];
console.log(rearrange(arr));

// //https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php
