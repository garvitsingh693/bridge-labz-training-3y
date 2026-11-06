"use strict";

// Q6. Pyramid Pattern Generator
// Use a default of 5 rows. In a browser, prompt allows a custom limit;
// in Node.js or another environment without prompt, the default is used.
let rowLimit = 5;
if (typeof prompt === "function") {
    const userInput = prompt("Enter pyramid row count (default 5):");
    if (userInput !== null && userInput.trim() !== "") {
        const parsedLimit = Number(userInput);
        if (Number.isInteger(parsedLimit) && parsedLimit > 0) {
            rowLimit = parsedLimit;
        } else {
            console.log("Invalid input. Using default row count 5.");
        }
    }
}

// Build and print the pyramid.
for (let row = 1; row <= rowLimit; row++) {
    let patternLine = "";
    for (let column = 1; column <= row; column++) {
        patternLine += "* ";
    }
    console.log(patternLine.trimEnd());
}

// Debug / var observation:
// Replacing let with var still prints this pattern because the loops run
// synchronously. However, var is function-scoped (or global-scoped here),
// so the same row/column names are reused rather than block-scoped.
// In strict mode, assigning to an undeclared loop variable causes ReferenceError.
// Add breakpoints to both for-loops and watch row, column, and patternLine.
