// Inheritance is like one object trying to access methods and properties of other object.
// All JavaScript objects inherit properties and methods from a prototype.

let arr = ["Akshay", "Aditya"];

let object = {
    name: "Akshay",
    city: "Dehradaun",
    getIntro: function() {
        console.log(this.name + " from " + this.city);
    }
}

function func() {
    //
}

// Whenever we create any object, javascript engine automatically puts these hidden properties into an object and attaches it to our object.

// Hidden object can be accessed by writing object.__proto__ OR arr.__proto__ OR func.__proto__

// What is prototype chain?
// In case of Arrays:
// arr.__proto__ is same as Array.prototype
// arr.__proto__.__proto__ is same as Object.prototype (Because arr.__proto__ also has a prototype)
// arr.__proto__.__proto__.__proto__ => null

// In case of objects:
// object.__proto__ is same as Object.prototype
// object.__proto__.__proto__ => null

// In case of functions:
// func.__proto__ is same as Function.prototype
// func.__proto__.__proto__  is same as Object.prototype
// func.__proto__.__proto__ .__proto__ => null

let object2 = {
    name: "Aditya"
}

// Never do this
object2.__proto = object;

// object2.name => "Aditya"
// object2.city => "Dehradaun" (because of prototype chain)
// object2.getIntro() => "Aditya from Dehradaun"
