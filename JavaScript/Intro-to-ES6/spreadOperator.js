// The Spread (…) Operator
// The spread operator expands an array or object into individual elements or properties.

const n1 = [1, 2, 3];
const n2 = [...n1, 4, 5];
console.log(n2); // [1, 2, 3, 4, 5]

// Adding Multiple Elements Using Spread Operator
// Even though we get the content on one array inside the other one, 
// actually it is an array inside another array which is definitely what we didn’t want. 
// If we want the content to be inside a single array we can make use of the spread operator.

// expand using spread operator
let a = [10, 20];
let b = [30, 40, ...a, 50, 60];

console.log(b); // [30, 40, 10, 20, 50, 60]


// Find Min / Max using Spread Operator
// Math object method won’t work and will return NaN. When …arr is used in the function call, 
// it “expands” an iterable object arr into the list of arguments In order to avoid this NaN output, 
// we make use of a spread operator. we make use of a spread operator In order to avoid this NaN
// Min in an array using Math.min()
let newArray = [1, 2, 3, -1];
console.log(Math.min(newArray)); //NaN

// Now using spread 
console.log(Math.min(...newArray)); //-1

function add(x, y, z) {
    return x + y + z;
}
  

// Passing Array Elements as Function Parameters
let parameters = [10, 20, 30];
console.log(add(...parameters)); // 60

// Copying an Array
let arr = [1, 2, 3];
let arr2 = [...arr]; // like arr.slice()
console.log(arr2); // [1, 2, 3]

const arr3 = [1, 2, 3];
const arr4 = [...arr3]; 
console.log(arr4); // [1, 2, 3]

// Please note that in JavaScript, doing
// arr4 = arr3 does not create a clone. It only creates
// one more reference. You may try uncommening the
// below code
const arr5 = [1, 2, 3];
const arr6 = arr5;
arr6.push(4);
console.log(arr5); // Prints [1, 2, 3, 4]

// Concatenate Arrays using Spread Operator
// The spread operator can be used to concatenate more than one array.
const arr7 = [1, 2, 3];
const arr8 = [4, 5, 6];
const arr9 = [...arr7, ...arr8];


// Working of Objects with Spread Operator

// ES6 has added spread property to object literals in javascript. 
// The spread operator (…) with objects is used to create copies of existing objects with new or 
// updated values or to make a copy of an object with more properties. 
// Let’s take an example of how to use the spread operator on an object
const usr = {
    name: 'Jen',
    age: 22
};

const cloneUsr = { ...usr };
console.log(cloneUsr); // { name: 'Jen', age: 22 }


// Let’s look at another example of merging two objects using the spread operator.
const usr1 = {
    name: 'Jen',
    age: 22,
};

const usr2 = {
    name: "Andrew",
    location: "Philadelphia"
};

const mergedUsers = { ...usr1, ...usr2 };
console.log(mergedUsers); // { name: 'Andrew', age: 22, location: 'Philadelphia' }
//  the repeated properties will be overwritten by the last object’s property value.