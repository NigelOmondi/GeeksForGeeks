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
// JavaScript Promises make handling asynchronous operations like API calls, file loading, or time delays easier. 
// Think of a Promise as a placeholder for a value that will be available in the future. 


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

// Chaining with Promise.prototype.then() Method
// Allows sequential execution of promises, passing results to the next .then() Method. 
Promise.resolve(5)
    .then((value) => value * 2) // Multiplies by 2
    .then((value) => value + 3) // Adds 3
    .then((finalValue) => console.log(finalValue)); // Logs: 13

// Sequential Execution with Array.prototype.reduce()
// Handles an array of promises sequentially.
let tasks = [1, 2, 3];
tasks.reduce((prevPromise, current) => {
    return prevPromise.then(() => {
        return new Promise((resolve) => {
            console.log(`Now Processing task ${current}`);
            setTimeout(resolve, 500); // Simulate async task
        });
    });
}, Promise.resolve());


// Dynamic Promise Creation
// Creating and resolving promises dynamically for runtime-based decisions.
function asyncTask(taskName) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`${taskName} completed`), 1000);
    });
}
asyncTask("Download File").then((result) => console.log(result)); // Download File completed


// Timeout Handling with Promise.race() Method
// Using Promise.race() Method to set a timeout for a task.
let fetchData = new Promise((resolve) => setTimeout(() => resolve("Data loaded"), 3000));
let timeout = new Promise((_, reject) => setTimeout(() => reject("Timeout!"), 2000));
Promise.race([fetchData, timeout])
    .then((result) => console.log(result))
    .catch((error) => console.error(error)); // Timeout!

// Handling Multiple Failures with Promise.allSettled() Method
// Works when you need to process all results, even if some promises fail.
Promise.allSettled([
    Promise.resolve("Task 1 done"),
    Promise.reject("Task 2 failed"),
    Promise.resolve("Task 3 done")
])
    .then((results) => console.log(results));
    // [
    //     { status: 'fulfilled', value: 'Task 1 done' },
    //     { status: 'rejected', reason: 'Task 2 failed' },
    //     { status: 'fulfilled', value: 'Task 3 done' }
    // ]


// Combining Promises with Parallel and Sequential Execution
// Run some promises in parallel, then process their results sequentially.
Promise.all([
    new Promise((resolve) => setTimeout(() => resolve("Task A done"), 1000)),
    new Promise((resolve) => setTimeout(() => resolve("Task B done"), 500))
])
    .then(([resultA, resultB]) => {
        console.log(resultA, resultB);
        return new Promise((resolve) => setTimeout(() => resolve("Final Task done"), 700));
    })
    .then((finalResult) => console.log(finalResult)); // Task A done Task B done Final Task done

// Wrapping Callbacks into Promises
// Convert callback-based async functions into promises.
function loadData(callback) {
    setTimeout(() => callback("Data loaded"), 1000);
}

function promisifiedLoadData() {
    return new Promise((resolve) => {
        loadData((result) => resolve(result));
    });
}
promisifiedLoadData().then((data) => console.log(data)); // Data loaded


// Benefits of Promises

// Avoid Callback Hell: Promises organize asynchronous code more neatly than nested callbacks.
// Error Handling: Errors can be caught in one place using .catch() Method.
// Chaining: Perform tasks sequentially with .then() Method.

// Promises simplify managing asynchronous tasks in JavaScript by providing cleaner syntax, 
// better error handling, and a structured way to perform sequential or parallel operations. 
// They are a key building block for modern JavaScript programming. For more advanced async patterns, 
// explore async/await for a more synchronous-like approach.