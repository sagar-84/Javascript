// A polyfill is a piece of javascript code which provide native support to the older browsers who does not have the support of modern functionalities of javascript.

// Polyfill for .forEach()
const fruits = ['Mango', 'Apple', 'Banana', 'Grapes']
fruits.forEach(function (fruit) {
  console.log(fruit)
}); // Mango Apple Banana Grapes

Array.prototype.customForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}
fruits.customForEach(function (fruit) {
  console.log(fruit)
})

// Polyfill for .map()
const numbers = [1, 4, 9, 16];
const numbersMap = numbers.map(function (number) {
  return number * 2
});
console.log(numbersMap); // [ 2, 8, 18, 32 ]

Array.prototype.customMap = function (callback) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this))
  }
  return arr;
}
let numbersCustomMap = numbers.customMap(function (number) {
  return number * 2
});
console.log(numbersCustomMap);

// Polyfill for .filter()
const fruitsArray = [
  { name: 'Mango', price: 200 },
  { name: 'Apple', price: 300 },
  { name: 'Banana', price: 100 },
  { name: 'Grapes', price: 150 }
];
const fruitsFilter = fruitsArray.filter(function (fruit) {
  return fruit.price > 100;
});
console.log(fruitsFilter);
// [{ name: 'Mango', price: 200 },{ name: 'Apple', price: 300 }, { name: 'Grapes', price: 150 }]

Array.prototype.customFilter = function (callback, context) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this)) {
      arr.push(this[i])
    }
  }
  return arr
}
fruitsArray.customFilter(function (fruit) {
  if (fruit.price > 100) {
    console.log(fruit);
  }
});

// Polyfill for .reduce()
const totalSum = numbers.reduce(function (accumulator, current) {
  return accumulator + current
}, 0)
console.log(totalSum); // 150

Array.prototype.customReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    if (accumulator !== undefined) {
      accumulator = callback.call(undefined, accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }
  return accumulator;
}

const totalSumCustom = numbers.customReduce(function (accumulator, current) {
  return accumulator + current
}, 0)
console.log(totalSumCustom); //150