// Assignment 6 - Q2: Microtasks run before macrotasks.
console.log("Start");

setTimeout(() => {
    console.log("setTimeout callback (macrotask)");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise callback (microtask)");
});

console.log("Synchronous log");
console.log("End");

// Expected order:
// Start
// Synchronous log
// End
// Promise callback (microtask)
// setTimeout callback (macrotask)
//
// JavaScript completes the current synchronous script first.
// It then drains the microtask queue (Promise callbacks) before
// taking the next macrotask (the setTimeout callback).
