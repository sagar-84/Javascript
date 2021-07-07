//spread syntax
let arr = [3, 5, 1];

console.log(Math.max(...arr)); // 5 (spread turns array into a list of arguments)

let arr = [1, 2, 3];

let arrCopy = [...arr]; // spread the array into a list of parameters then put the result into a new array

let obj = { a: 1, b: 2, c: 3 };

let objCopy = { ...obj }; // spread the object into a list of parameters then return the result in a new object

//rest syntax
function addFiveToABunchOfNumbers(...numbers) {
  return numbers.map((x) => x + 5);
}

const result1 = addFiveToABunchOfNumbers(4, 5, 6, 7, 8, 9, 10); // [9, 10, 11, 12, 13, 14, 15]

function showName(firstName, lastName, ...titles) {
  console.log(firstName + " " + lastName); // Julius Caesar

  // the rest go into titles array
  // i.e. titles = ["Consul", "Imperator"]
  console.log(titles[0]); // Consul
  console.log(titles[1]); // Imperator
  console.log(titles.length); // 2
}

showName("Julius", "Caesar", "Consul", "Imperator");

const [a, b, ...rest] = [1, 2, 3, 4]; // a: 1, b: 2, rest: [3, 4]

const { e, f, ...others } = {
  e: 1,
  f: 2,
  g: 3,
  h: 4,
}; // e: 1, f: 2, others: { g: 3, h: 4 }