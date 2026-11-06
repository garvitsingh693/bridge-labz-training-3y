"use strict";

// Q10. Nested Hoisting and Closures

// Original behavior:
// function outer() {
//     console.log(count); // undefined: outer's var count is hoisted.
//     var count = 5;
//     function inner() {
//         console.log(count); // undefined: inner has its own hoisted var count.
//         var count = 10;
//     }
//     inner();
// }
// outer();
// Output: undefined, undefined

// Each function call creates a separate execution context.
// The inner function's local var count shadows outer's count.
function outer() {
    console.log("Outer count before assignment:", count);
    var count = 5;

    function inner() {
        console.log("Inner count before assignment:", count);
        var count = 10;
        console.log("Inner count after assignment:", count);
    }

    inner();
    console.log("Outer count after inner():", count);
}
outer();

// Arrow-function comparison:
// An arrow function does not create its own this/arguments binding,
// but it still has its own local variables and its own var scope.
function outerWithArrow() {
    var count = 5;

    const innerArrow = () => {
        console.log("Arrow reads outer count:", count);
        const innerCount = 10;
        console.log("Arrow local count:", innerCount);
    };

    innerArrow();
    console.log("Outer count remains:", count);
}
outerWithArrow();

// Debug call-stack flow: outer() is called, inner() is pushed onto the
// call stack, inner() returns and is popped, then outer() returns.
// Repeat with a breakpoint inside inner to inspect both local scopes.
