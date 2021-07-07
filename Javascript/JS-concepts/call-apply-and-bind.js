let person = {
    firstName: "Mary",
    lastName: "Doe"
};

let printFullName = function(city, country) {
    console.log(this.firstName + " " + this.lastName + " " + city + " " + country);
}

//call() method takes arguments separately.
printFullName.call(person, "Oslo", "Norway");

// apply() method takes arguments as an array.
printFullName.apply(person, ["Oslo", "Norway"]);

//bind() method gives copy of the method which can be invoked later.
let printName = printFullName.bind(person);
printName("Oslo", "Norway");

//Polyfill for bind() method. (Browser fallback)
Function.prototype.myBind = function(...args) {
    let obj = this,
    params = args.slice(1);
    return function(...args2) {
        obj.apply(args[0], [...params, ...args2])
    }
}

let printName2 = printFullName.myBind(person);
printName2("Oslo", "Norway");