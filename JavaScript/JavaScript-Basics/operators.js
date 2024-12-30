/* 7. Operators in javascript

JavaScript operators operate the operands, 
these are symbols that are used to manipulate a certain value or operand. 
Operators are used to performing specific mathematical and logical computations on operands.
*/

/* 
    1. Arithmetic operators
    2. Assignment operators
    3. Comparison operators
    4. Logical operators
    5. Bitwise operators
    6. String operators
    7. Conditional (ternary) operator
    8. Comma operator
    9. Unary operators
    10. Relational operators
*/

/* 
    1. Arithmetic operators
    Arithmetic operators are used to perform arithmetic operations on operands.
*/

let a = 5;
let b = 3;
console.log(a + b); // Output: 8

console.log(a - b); // Output: 2

console.log(a * b); // Output: 15

console.log(a / b); // Output: 1.6666666666666667

console.log(a % b); // Output: 2

console.log(a ** b); // Output: 125

/* 
    2. Assignment operators
    Assignment operators are used to assign values to variables.
*/

let x = 10;
let y = 5;

x += y; // x = x + y
console.log(x); // Output: 15

x -= y; // x = x - y
console.log(x); // Output: 10

x *= y; // x = x * y
console.log(x); // Output: 50

x /= y; // x = x / y
console.log(x); // Output: 10

x %= y; // x = x % y
console.log(x); // Output: 0

/* 
    3. Comparison operators
    Comparison operators are used to compare two values.
*/

let m = 10;
let n = 5;

console.log(m == n); // Output: false

console.log(m != n); // Output: true

console.log(m > n); // Output: true

console.log(m < n); // Output: false

console.log(m >= n); // Output: true

console.log(m <= n); // Output: false

/* 
    4. Logical operators
    Logical operators are used to determine the logic between variables or values.
*/

let p = true;
let q = false;

console.log(p && q); // Output: false

console.log(p || q); // Output: true

console.log(!p); // Output: false

/* 
    5. Bitwise operators
    Bitwise operators are used to perform bitwise operations on operands.
*/

let r = 5; // 101
let s = 3; // 011

console.log(r & s); // Output: 1

console.log(r | s); // Output: 7

console.log(r ^ s); // Output: 6

console.log(~r); // Output: -6

console.log(r << 1); // Output: 10

console.log(r >> 1); // Output: 2

/* 
    6. String operators
    String operators are used to concatenate strings.
*/

let firstName = 'John';
let lastName = 'Doe';

console.log(firstName + ' ' + lastName); // Output: John Doe

/*
    7. Conditional (ternary) operator
    The conditional operator is the only JavaScript operator that takes three operands.
*/

let age = 20;
let eligible = (age > 18) ? 'Eligible' : 'Not Eligible';
console.log(eligible); // Output: Eligible

/* 
    8. Comma operator
    The comma operator is used to evaluate multiple expressions.
*/
// For Short-circuiting multiple expressions
// If you want to combine multiple operations that need to be done sequentially 
// but only care about the result of the final expression, the comma operator can be used.
let d = 5;
let e = (d++, d *= 2, d + 10);
console.log(e); // Output: 22
// Here,
// d++ increments d from 5 to 6.
// d *= 2 doubles d, making it 12.
// d + 10 results in 22, which is assigned to e.

// Simplifying multiple expressions in a concise way
// When you need to evaluate multiple expressions in a context that only allows a single expression, 
// the comma operator can help you do so. For example, it's sometimes used in loops and arrow functions 
// to compactly evaluate multiple expressions.

// Example in a for loop:
// You can update multiple variables in the for loop initialization or update section using the comma operator:
 for (let i = 0, j = 10; i < j; i++, j--) {
   console.log(i, j);
 }
// Here, the comma operator allows you to update both i and j in one line (i++ and j--).

// Example in an arrow function:
// In a concise arrow function, the comma operator can be used to perform side effects and return a final result:

const example = (a, b) => (console.log('Calculating'), a + b);
console.log(example(3, 4)); // Logs "Calculating" and then outputs 7


function returnWithSideEffect() {
    return (console.log('Side effect!'), 42);
  }
  console.log(returnWithSideEffect()); // Logs "Side effect!" and returns 42

  
/*  9. Unary operators
    Unary operators are used to perform operations on a single operand.
*/

let u = 5;

console.log(-u); // Output: -5

console.log(++u); // Output: 6

console.log(--u); // Output: 4

console.log(+u); // Output: 5

console.log(typeof u); // Output: number

/* 
    10. Relational operators
    Relational operators are used to determine the relationship between two operands.
*/

let v = 5;
let w = 3;

console.log(v == w); // Output: false

console.log(v != w); // Output: true

console.log(v > w); // Output: true

console.log(v < w); // Output: false

console.log(v >= w); // Output: true

console.log(v <= w); // Output: false

