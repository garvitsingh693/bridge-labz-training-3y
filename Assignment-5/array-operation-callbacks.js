// Q2: Use a callback to perform different operations on an array.

function applyOperation(numbers, operation) {
    // map() calls operation once for every array element.
    return numbers.map(operation);
}

const numbers = [1, 2, 3, 4];

// Pass a callback that doubles each number.
const doubledNumbers = applyOperation(numbers, function (number) {
    return number * 2;
});

// Pass a callback that squares each number.
const squaredNumbers = applyOperation(numbers, function (number) {
    return number * number;
});

console.log("Original:", numbers);
console.log("Doubled:", doubledNumbers);
console.log("Squared:", squaredNumbers);
