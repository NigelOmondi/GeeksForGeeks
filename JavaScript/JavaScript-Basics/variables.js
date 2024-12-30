/* Var

 oldest keywords to declare a variable and var can be updated and redeclared.
*/

var username = 'Nigel Omondi';


/* let

 block-scoped, can’t be accessible out the particular block, and let can be updated but not redeclared
*/

let firstName = 'Nigel';

/* const

 block scope, neither be updated nor redeclared.
*/

const lastName = 'Omondi';

var a = "Hello Nigel"
var b = 10;
var a = 20;
b = 30;

console.log(`the value of a is ${a}`); // returns 20
console.log(`the value of b is ${b}`); // returns 30
console.log(`the value of a has been redeclared to ${a}`); // returns 20
console.log(`the value of b has been updated to ${b}`); // returns 30


// Using let
{
    let num = 20;

    // Calling the function inside block
    console.log(num) // returns 20
}

// Calling the function outside 
// block throws a Error because the variable <num> is block-scoped and has been called outside the block
console.log(num) 

// Using const
const x = 22;
{
    const x = 90;
    console.log(x); // returns 90
    {
        const x = 45;
        console.log(x); // returns 45
    }
}
console.log(x); // returns 22