/* Function in JavaScript

   A function in JavaScript is a block of reusable code that performs a 
   specific task, can take inputs (parameters), and returns a result 
   using the return statement.
*/

function sumNumbers(number1, number2) {
      return number1 + number2;
};

console.log(sumNumbers(5, 10)); // Output: 15

// Using comma operator in for loop
for (let i = 0, j = 10; i < j; i++, j--) {
   console.log(i, j);
 }

const example = (a, b) => (console.log('Calculating'), a + b);
console.log(example(3, 4));

function returnWithSideEffect() {
   return (console.log('Side effect!'), 42);
 }
 console.log(returnWithSideEffect()); // Logs "Side effect!" and returns 42



 