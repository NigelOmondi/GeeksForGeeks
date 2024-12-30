/* Numbers

 Represent both integer and floating-point numbers.
*/
let integerNumber = 42;
let floatingPointNumber = 3.14
console.log(integerNumber); // returns 42
console.log(floatingPointNumber); // returns 3.14

/* TYPESCRIPT EQUIVALENT TYPES
    let integerNumber: number = 42;
    let floatingPointNumber: number = 3.14;
*/


/* String

 A string is a sequence of characters. 
 In JavaScript, strings can be enclosed within single or double quotes.
*/
let singleQuoteString = 'Hello, World!';
let doubleQuoteString = "Hello, World!";
console.log(singleQuoteString); // returns Hello, World!
console.log(doubleQuoteString); // returns Hello, World!

/* TYPESCRIPT EQUIVALENT TYPES
    let singleQuoteString: string = 'Hello, World!';
    let doubleQuoteString: string = "Hello, World!";
*/


/* Boolean

 Represent a logical entity and can have two values: true or false.
*/
let isJavaScriptFun = true;
let isThisExampleFalse = false;
console.log(isJavaScriptFun); // returns true
console.log(isThisExampleFalse); // returns false

/* TYPESCRIPT EQUIVALENT TYPES
    let isJavaScriptFun: boolean = true;
    let isThisExampleFalse: boolean = false;
*/


/* Null

 This type has only one value: null. 
 It is left intentionally so that it shows something that does not exist.
*/
let emptyValue = null;
console.log(emptyValue); // returns null

/* TYPESCRIPT EQUIVALENT TYPES
    let emptyValue: null = null;
*/


/* Undefined

 A variable that has not been assigned a value is undefined.
*/
let notAssigned;
console.log(notAssigned); // returns undefined

/* TYPESCRIPT EQUIVALENT TYPES
    let notAssigned: undefined;
*/


/* Symbol

Unlike other primitive data types, it does not have any literal form. 
It is a built-in object whose constructor 
returns a symbol that is unique.
*/
let uniqueSymbol = Symbol('unique');
console.log(uniqueSymbol); // returns Symbol(unique)

/* TYPESCRIPT EQUIVALENT TYPES
    let uniqueSymbol: symbol = Symbol('unique');
*/


/* bigint

 The bigint type represents the whole numbers that are larger than 2 raised to power 53 -1. 
 To form a bigint literal number
*/
let bigInteger = 1234567890123456789012345678901234567890n;
console.log(bigInteger); // returns 1234567890123456789012345678901234567890n


/* TYPESCRIPT EQUIVALENT TYPES
    let bigInteger: bigint = 1234567890123456789012345678901234567890n;
*/


/* Object

 It is the most important data-type and forms the building blocks for modern JavaScript.
*/
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};
console.log(person); // returns { firstName: 'John', lastName: 'Doe', age: 30 }

/* TYPESCRIPT EQUIVALENT TYPES
    let person: { firstName: string; lastName: string; age: number } = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};
*/


// Binary Numbers
console.log(0b11); // returns 3

/* TYPESCRIPT EQUIVALENT TYPES
    let binaryNumber: number = 0b11;
};
*/










