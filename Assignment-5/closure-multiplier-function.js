// Q7: Return a function that remembers the multiplier.

function makeMultiplier(multiplier) {
    // The returned function can still access multiplier
    // even after makeMultiplier has finished executing.
    return function (number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);
const double = makeMultiplier(2);

console.log(triple(5)); // 15
console.log(double(5)); // 10

// Closure: the inner function remembers variables from its outer
// function's scope. Here, it remembers the value of multiplier.
