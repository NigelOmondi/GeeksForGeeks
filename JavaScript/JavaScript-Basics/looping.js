/*  Looping in javascript

    Looping in programming languages is a feature that facilitates 
    the execution of a set of instructions/functions repeatedly while 
    some condition evaluates to true.
*/

/*
    1. for loop
    2. while loop
    3. do while loop
    4. for in loop
    5. for of loop
*/

/* 
    1. for loop
    The for loop is used in JavaScript to execute code block multiple times. 
    It is often used when the number of iterations is known or fixed.

    Executes code for a specific number of iterations.
*/

for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0, 1, 2, 3, 4
};

/* 2. while loop
    The while loop is used in JavaScript to execute a block of code as long as 
    the specified condition evaluates to true.
    
    Executes and repeats code as long as the condition evaluates to true
*/

let i = 0;
while (i < 5) {
    console.log(i); // Output: 0, 1, 2, 3, 4
    i++;
}

/* 3. do while loop
    The do...while loop is similar to the while loop, but the condition is 
    evaluated after the code block is executed. This means that the code block 
    will always be executed at least once, even if the condition is not true.
*/

let j = 0;
do {
    console.log(j); // Output: 0
    j++;
}
while (j < 0);

/* 4. for in loop
    The for...in loop is used to iterate over the properties of an object.
*/

const person = {
    name: 'John',
    age: 30
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`); // Output: name: John, age: 30
}

/* 5. for of loop
    The for...of loop is used to iterate over the elements of an iterable object 
    like an array or a string.
*/

const fruits = ['apple', 'banana', 'orange'];

for (let fruit of fruits) {
    console.log(fruit); // Output: apple, banana, orange
}