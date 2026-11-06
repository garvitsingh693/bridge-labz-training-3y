// Q9. Odd-Even Number Analyzer

const numbers = [];
const classifications = [];

// Add numbers 1 through 30 to the array using a loop.
for (let number = 1; number <= 30; number++) {
    numbers.push(number);
}

// Classify each number according to the given conditions.
for (const number of numbers) {
    let result;

    if (number % 3 === 0 && number % 5 === 0) {
        result = "FizzBuzz";
    } else if (number % 2 === 0) {
        result = "Even";
    } else {
        result = "Odd";
    }

    classifications.push(`${number}: ${result}`);
}

// Display the new array of results.
console.log("Odd-Even Number Analyzer");
console.log(classifications);
