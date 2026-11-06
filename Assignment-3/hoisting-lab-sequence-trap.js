"use strict";

// Q5. Hoisting Lab: The Sequence Trap
// Original sequence, explained in comments:
// console.log(score); // undefined: var is hoisted and initialized to undefined.
// announce();          // Works: function declarations are hoisted with their body.
// var score = 50;
// function announce() { console.log("Game started"); }
// let status = "ready";
// startGame();         // Works: status has been initialized before this call.
// function startGame() { console.log(status); }

// Safe version: declarations and initialization appear before use.
const score = 50;
const status = "ready";

function announce() {
    console.log("Game started");
}
function startGame() {
    console.log(status);
}

console.log(score);
announce();
startGame();

// Arrow functions are not hoisted like function declarations.
// They must be initialized before they are called.
const announceWithArrow = () => console.log("Game started (arrow function)");
const startGameWithArrow = () => console.log(status);

announceWithArrow();
startGameWithArrow();

// Debug note: a let/const binding exists in its scope before its line,
// but cannot be accessed until initialization (temporal dead zone).
