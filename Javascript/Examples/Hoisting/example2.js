// hoisting

sayName();
sayAge();

function sayName() {
    console.log('Hello There');
}

var sayAge = function() {
    console.log('My age is 26');
}