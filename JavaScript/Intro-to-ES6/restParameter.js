// JavaScript Rest parameter

// Last Updated : 13 Aug, 2024
// The JavaScript Rest parameter allows a function to accept an indefinite number of arguments as an array. 
// It is represented by three dots (…) followed by the parameter name and must be the last parameter in the function, 
// enabling flexible and dynamic argument handling.

function fun(a, b){
    return a + b;
}
console.log(fun(1, 2)); // 3
console.log(fun(1, 2, 3, 4, 5)); // 3

// Extra arguments beyond parameters are ignored without error.
// Use … to collect additional arguments into an array.
// Rest parameters allow flexible argument handling for functions.


// Example 1: Rest Parameter in JavaScript
// es6 rest parameter
function fun(...input) {
    let sum = 0;
    for (let i of input) {
        sum += i;
    }
    return sum;
}
console.log(fun(1, 2)); //3
console.log(fun(1, 2, 3)); //6
console.log(fun(1, 2, 3, 4, 5)); //15

// rest with function and other arguments
function fun(a, b, ...c) {
    console.log(`${a} ${b}`); //Mukul Latiyan
    console.log(c);  //[ 'Lionel', 'Messi', 'Barcelona' ]
    console.log(c[0]); //Lionel
    console.log(c.length); //3
    console.log(c.indexOf('Lionel')); //0
}
fun('Mukul', 'Latiyan', 'Lionel', 'Messi', 'Barcelona');