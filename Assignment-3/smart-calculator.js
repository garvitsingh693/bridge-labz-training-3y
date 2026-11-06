"use strict";

// Q7. Smart Calculator
const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

class InvalidOperationError extends Error {}
class CalculationError extends Error {}

function calculate(operation, firstNumber, secondNumber) {
    switch (operation) {
        case "add":
            return firstNumber + secondNumber;
        case "divide":
            if (secondNumber === 0) {
                throw new CalculationError("Cannot divide by zero.");
            }
            return firstNumber / secondNumber;
        case "power":
            return Math.pow(firstNumber, secondNumber);
        case "root":
            if (firstNumber < 0) {
                throw new CalculationError("Cannot find the real square root of a negative number.");
            }
            return Math.sqrt(firstNumber);
        case "subtract":
            return firstNumber - secondNumber;
        default:
            throw new InvalidOperationError(`Unknown operation: ${operation}`);
    }
}

// Run each operation separately so one error does not stop the remaining tests.
console.log("Smart Calculator Summary");
for (const operation of [...operations, "modulus"]) {
    try {
        const result = calculate(operation, num1, num2);
        console.log(`${operation}: ${result}`);
    } catch (error) {
        console.log(`${operation}: ERROR - ${error.name}: ${error.message}`);
    }
}

// Extra error-path test for a negative square-root input.
try {
    console.log(`root(-9): ${calculate("root", -9, 0)}`);
} catch (error) {
    console.log(`root(-9): ERROR - ${error.message}`);
}
