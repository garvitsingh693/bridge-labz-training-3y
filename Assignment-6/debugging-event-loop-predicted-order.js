// Assignment 6 - Q9: Predict and verify the event-loop order.

// Predicted output:
// Script start
// Script end
// Promise callback
// Timeout callback

console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0);

Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");

// Explanation: synchronous statements execute first. Promise.then()
// schedules a microtask, while setTimeout() schedules a macrotask.
// After the current script finishes, the microtask queue is processed
// before the timer callback is taken from the macrotask queue.
