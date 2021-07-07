// SCOPE

// GLOBAL SCOPE
const name = 'sagar';
const age = 25;
console.log(name);

function sayName() {
    console.log(`my name is ${name}`);
    function sayAge() {
        const age = 10;
        console.log(`My age is ${age}`);
    }
    sayAge();
}
sayName();
