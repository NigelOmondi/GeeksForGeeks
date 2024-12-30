// Promises simplify handling asynchronous operations by providing 
// .then and .catch methods. 

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation completed successfully.
// rejected: meaning that the operation failed.
// A promise is an object that may produce a single value some time in the future:
// either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred).

// A promise is a proxy for a value not necessarily known when the promise is created.
// It allows you to associate handlers with an asynchronous action’s eventual success value or failure reason.

const fetch = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => 
            resolve("Data fetched"), 2000);
    });
};

fetch().then(data => 
    console.log(data)); // Data fetched

// The .then() method is used to return a Promise.
// It takes two arguments: callback functions for the success and failure cases of the Promise.
// Promises are chainable. We can call .then() on a Promise as many times as we want.

// The .catch() method is used to handle rejected Promises.
// It takes a single argument: a callback function for the failure case of the Promise.

let checkEven = new Promise((resolve, reject) => {
    let number = 4;
    if (number % 2 === 0) resolve("The number is even!");
    else reject("The number is odd!");
});

checkEven
    .then((message) => console.log(message)) // On success
    .catch((error) => console.error(error)); // On failure

    
// JavaScript Promise
// Last Updated : 12 Dec, 2024
// JavaScript Promises make handling asynchronous operations like API calls, file loading, or time delays easier. Think of a Promise as a placeholder for a value that will be available in the future. It can be in one of three states:

// Pending: The task is in initial state.
// Fulfilled: The task completed successfully, and the result is available.
// Rejected: The task failed, and an error is provided.
// Here is an example Promise to check if a number is even. If yes, it resolves; otherwise, it rejects.


// Note: The “resolve” and “reject” are not keywords. 
// you can use any name that you want to give to a function.

// syntax
// let promise = new Promise((resolve, reject) => {
//      Perform async operation
//     if (operationSuccessful) {
//         resolve(“Task successful”);
//     } else {
//         reject(“Task failed”);
//     }
// });


// Let’s See Advanced Promise Methods and Patterns for Effective Async Handling

// 1. Promise.all() Method
// Waits for all promises to resolve and returns their results as an array. 
// If any promise is rejected, it immediately rejects.

Promise.all([
    Promise.resolve("Task 1 completed"),
    Promise.resolve("Task 2 completed"),
    Promise.reject("Task 3 failed")
])
    .then((results) => console.log(results))
    .catch((error) => console.error(error)); // Task 3 failed


// Promise.allSettled() Method
// Waits for all promises to settle (fulfilled or rejected) 
// Method and returns an array of their outcomes.

Promise.allSettled([
    Promise.resolve("Task 1 completed"),
    Promise.reject("Task 2 failed"),
    Promise.resolve("Task 3 completed")
])
    .then((results) => console.log(results)); 
    // [ 
    //   { status: 'fulfilled', value: 'Task 1 completed' }, 
    //   { status: 'rejected', reason: 'Task 2 failed' }, 
    //   { status: 'fulfilled', value: 'Task 3 completed' } 
    // ]

    // Promise.race() Method
    // Promise.race() Method resolves or rejects as soon as the first promise settles.

Promise.race([
    new Promise((resolve) => setTimeout(() => resolve("Task 1 finished"), 1000)),
    new Promise((resolve) => setTimeout(() => resolve("Task 2 finished"), 500))
])
    .then((result) => console.log(result)); // Task 2 finished

// Promise.any() Method
// Promise.any() Method resolves with the first fulfilled promise. If all are rejected, 
// it rejects with an AggregateError.
Promise.any([
    Promise.reject("Task 1 failed"),
    Promise.resolve("Task 2 completed"),
    Promise.resolve("Task 3 completed")
])
    .then((result) => console.log(result))
    .catch((error) => console.error(error)); // Task 2 completed

// Promise.resolve() Method
// Promise.resolve() Method returns a resolved Promise with the given value.
Promise.resolve("Task completed")
    .then((result) => console.log(result)); // Task completed

Promise.resolve("Immediate success")
    .then((value) => console.log(value));

// Promise.reject() Method
// Promise.reject() Method returns a rejected Promise with the given reason.
Promise.reject("Task failed")
    .catch((error) => console.error(error)); // Task failed

Promise.reject("Immediate failure")
    .catch((error) => console.error(error));

// Promise.finally() Method
// Promise.finally() Method runs a cleanup or final code block regardless of the promise’s result 
// (fulfilled or rejected).

Promise.resolve("Task completed")
    .then((result) => console.log(result)) // Task completed
    .catch((error) => console.error(error))
    .finally(() => console.log("Cleanup completed")); // Cleanup completed