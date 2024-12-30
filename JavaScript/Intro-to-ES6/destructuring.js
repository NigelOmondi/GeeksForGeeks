// Destructuring Assignment

// Destructing in JavaScript basically means the breaking down of a complex structure
// (Objects or arrays into simpler parts

// Object Destructuring
const obj = { name: "Nigel", age: 27 };
const { name, age } = obj;
console.log(obj); // { name: 'Nigel', age: 27 }
console.log(name, age); // Nigel 27

// Array Destructuring
const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(arr); // [ 1, 2, 3 ]
console.log(a, b, c); // 1 2 3

const colors = ["red", "blue", "green"];
const [first, second] = colors;
console.log(first, second); // red blue

const numArray = [10, 20, 30, 40]
const [p, q, , r] = numArray; //nb the empty space in the array for value 30 is skipped between q and r
console.log("Example 2");
console.log(p); // 10
console.log(q); // 20
console.log(r); // 40

// Destructuring with Rest Operator
let [fst, , ...last] = ["a", "b", "c", "d"];

console.log(fst); // a
console.log(last); // [ 'c', 'd' ]


// SWAPPING
let x = 10, y = 20;

// Swapping 
// Swapping two variables using destructuring
[x, y] = [y, x];

console.log(x); // 20
console.log(y); // 10


let marks = { m: 21, n: -34, o: 47 };

const { m, n, o } = marks;

console.log(m); // 21
console.log(n); // -34
console.log(o); // 47

//Simple Object Destructuring
({ x, y} = { x: 10, y: 20 });
console.log(x); // 10
console.log(y); // 20

({x, y, ...restof} = {x: 10, y: 20, m: 30, n: 40});
console.log(x); // 10
console.log(y); // 20
console.log(restof); // {m: 30, n: 40}

const person = {
    firstName: "Nigel",
    years: 30,
    city: "New York"
};

const { firstName, years, city } = person;

console.log(city); // New York

// nested object destructuring
const person1 = {
    username: "Nigel",
    yr: 30,
    address: {
        ciry: "New York",
        state: "NY"
    }
};

const { username, yr, address: { ciry, state } } = person1;

console.log(username); // Nigel
console.log(yr); // 30
console.log(ciry); // New York
console.log(state); // NY

// Nested Object destructuring : 
// The Nested objects can also be destructured using destructuring syntax.
const scores = {
    section1: { alpha: 15, beta: 16 },
    section2: { alpha: -31, beta: 19 }
};
const { section1: { alpha: alpha1, beta: beta1 } } = scores;
console.log(alpha1, beta1); // 15 16

let objet = {
    objName: "GFG",
    add: {
        country: "India",
        state: {
            code: "JS",
            pincode: "820800",
            article: {
                topic: "destructuring"
            }
        }
    }
}

let { objName } = objet;
console.log(objName)

let { add: { country: ocha } } = objet
console.log(ocha)

let { add: { state: { code: cd } } } = objet
console.log(cd)

let { add: { state: { article: { topic: ef } } } } = objet
console.log(ef);