"use strict";

// Q4. Debugging Mystery
// Original bug:
// function showMessage() {
//     greeting = "Welcome"; // ReferenceError: greeting is not declared.
//     console.log(greeting);
// }
// showMessage();

// Fixed version: declare greeting in the function's local scope.
function showMessage() {
    const greeting = "Welcome";
    console.log(greeting);
}

showMessage();

// Debugging exercise:
// 1. Set a breakpoint on the const greeting line.
// 2. Add greeting to the WATCH panel.
// 3. Step over the declaration and inspect its value.
// 4. Check the CALL STACK: showMessage is active, then control returns
//    to the top-level script after the function finishes.
//
// Strict mode prevents accidental creation of global variables.
// A declared local variable belongs to the function scope.
