// Q8. Strict Mode Showdown

// STRICT-MODE VERSION (the active version in this file).
"use strict";

// The original function is illegal in strict mode for two reasons:
// 1. Duplicate parameter names are a SyntaxError.
// 2. Assigning to undeclared total and deleting an identifier are illegal.
//
// Keep the original snippet commented out because a parse-time SyntaxError
// would prevent the entire file from running:
// function demo(a, a) {
//     total = 10;
//     delete total;
// }
// demo(5, 10);

// Correct ES6 version: unique parameters, declared variables, and object
// property deletion (delete can remove configurable object properties).
function demoStrict(firstValue, secondValue) {
    let total = firstValue + secondValue;
    const record = { total };
    console.log("Before delete:", record.total);
    delete record.total;
    console.log("After delete:", record.total);
}
demoStrict(5, 10);

// NON-STRICT COMPARISON:
// To observe legacy sloppy-mode behavior, copy the following code into a
// separate file WITHOUT a "use strict" directive and run it there:
//
// function demoSloppy(a, a) {
//     total = 10;       // Creates/updates a global property in classic scripts.
//     console.log(total);
//     delete total;     // Deleting an identifier evaluates to false.
// }
// demoSloppy(5, 10);
//
// Strict mode rejects duplicate parameters and undeclared assignments.
// Modern ES modules are strict by default; use explicit declarations instead.
