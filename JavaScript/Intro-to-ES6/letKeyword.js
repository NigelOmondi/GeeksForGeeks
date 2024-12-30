// Its block scoped and prevents variable leakage outside of the intended scope.

let n = 10;
{
    let n = 2; // Block-scoped variable
    console.log(n); // returns 2
}
console.log(n); // returns 10

