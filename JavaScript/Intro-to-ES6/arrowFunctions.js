// Arrow Functions

// Arrow functions provide a concise syntax for writing function expressions 
// and automatically bind this to the surrounding context.


// Traditional function
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 3)); // 5

// Arrow function
const add = (a, b) => a + b;
console.log(add(5, 3)); // 5

// Implicit return for single-expression functions.

// Unlike regular functions, arrow functions don’t have their own this, 
// but instead, inherit it from the surrounding context.

// Arrow functions do not have access to the arguments object, 
// which is available in regular functions.

const greet = () => {
    console.log('Hello Worlddd!!');
};

const greeting = () => 'Bonjour Nigel!';

greet(); // 'Hello Worlddd!!!!'
console.log(greeting()); // 'Bonjour Nigel!'


// Arrow Function with Single Parameters
// If your arrow function has a single parameter, 
// you can omit the parentheses around it.
const square = x => x*x;
console.log(square(4)); // 16


// Arrow Function with Default Parameters

// Arrow functions support default parameters, allowing predefined values if no argument is passed, 
// making JavaScript function definitions more flexible and concise.
const gfg = ( x, y, z = 30 ) => {
    console.log( x + " " + y + " " + z);
}

gfg( 10, 20 ); // 10 20 30


// Return Object Literals

// In JavaScript, returning object literals within functions is concise: () => ({ key: value }) 
// returns an object { key: value }, useful for immediate object creation and returning.
const makePerson = (firstName, lastName) =>
    ({first: firstName, last: lastName});
    console.log(makePerson("Nigel", "Omondi")); // { first: 'Nigel', last: 'Omondi' }

// Async Arrow Functions
// Arrow functions can be made asynchronous by adding the async keyword before the parameter list.
const fetchData = async () => {
    const response = await fetch('https://api.github.com/users');
    const data = await response.json();
    console.log(data);
};