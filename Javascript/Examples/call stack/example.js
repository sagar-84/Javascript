// call stack work flow
function sayHello() {
    console.log('Hello My name is sagar');
}

function sayAge() {
    console.log('My age is 25');
}

function sayAll() {
    sayHello();
    sayAge();
}

sayAll(); //Function Invoke - Executes first

console.log('Final');