// The for/of loop allows you to iterate over iterable objects like arrays, strings, Maps, 
// and Sets but in a short syntax as compared to other loops.

// Iterating Over an Array
const a = ["apple", "banana", "cherry"];
for (const fruit of a) {
    console.log(fruit); // apple, banana, cherry
}

const s = "hello";
for (const char of s) {
    console.log(char); // h, e, l, l, o
}