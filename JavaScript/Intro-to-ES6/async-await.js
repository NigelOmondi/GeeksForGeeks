// Async and Await in JavaScript

// Last Updated : 12 Dec, 2024
// Async and Await in JavaScript is used to simplify handling asynchronous operations using promises. 
// By enabling asynchronous code to appear synchronous, they enhance code readability and 
// make it easier to manage complex asynchronous flows.

async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log(data);
  }
  
  fetchData();

//   {
//     userId: 1,
//     id: 1,
//     title: ....',
//     body: ....}

async function functionName() {
    try {
      const result = await someAsyncFunction();
      console.log(result);
    } catch (error) {
      console.error("Error:", error.message);
    }
  }

// Async Function

// The async function allows us to write promise-based code as if it were synchronous. 
// This ensures that the execution thread is not blocked. Async functions always return a promise. 
// If a value is returned that is not a promise, JavaScript automatically wraps it in a resolved promise.
const getData = async () => {
    let data = "Hello World";
    return data;
}

getData().then(data => console.log(data)); // Hello World


// Await Keyword

// The await keyword is used to wait for a promise to resolve. 
// It can only be used within an async block. 
// Await makes the code wait until the promise returns a result, 
// allowing for cleaner and more manageable asynchronous code.

const getsData = async () => {
    let y = await "Hello World";
    console.log(y);
}

console.log(1);
getsData();
console.log(2);

// 1
// 2
// Hello World

// The async keyword transforms a regular JavaScript function into an asynchronous function, 
// causing it to return a Promise.
// The await keyword is used inside an async function to pause its execution 
// and wait for a Promise to resolve before continuing.

// Error Handling
async function fetchData() {
    try {
      let response = await fetch('https://api.example.com/data');
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

// How Asynchronous JavaScript Works Behind the Scenes

// To understand asynchronous behavior better, 
// it’s important to know about the JavaScript runtime environment, 
// specifically the event loop and call stack:

// Call Stack:

// The call stack is where functions are executed in the order they’re called. 
// In synchronous operations, each function is added to the stack and executed before moving to the next.

// Web APIs (in Browsers): 
// Functions like setTimeout, HTTP requests, and event listeners are handled by Web APIs in the browser. 
// When an asynchronous function like setTimeout is called, it is passed to these Web APIs, 
// which manage the timing without blocking the main call stack.

// Callback Queue: 
// Once the Web API has finished its job (like waiting for the timeout), 
// it pushes the callback function (like the one in setTimeout) to the callback queue.

// Event Loop: 

// The event loop continuously checks the call stack. If it’s empty, 
// it pushes the functions from the callback queue onto the stack for execution. 
// This is why the delayed message “Geek” is logged after other code has finished.