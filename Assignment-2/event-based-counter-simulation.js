// Q6. Event-Based Counter Simulation

let count = 0;

// Increase the shared counter.
function increment() {
    count++;
    console.log(`Count after increment: ${count}`);
}

// Decrease the shared counter.
function decrement() {
    count--;
    console.log(`Count after decrement: ${count}`);
}

// Nested function demonstrates that it can access and update
// the count variable from the outer function's scope.
function runNestedCounterDemo() {
    function addTwoClicks() {
        count += 2;
        console.log(`Count after two nested increments: ${count}`);
    }

    addTwoClicks();
}

// Simulate button clicks by calling the functions.
increment();
increment();
decrement();
runNestedCounterDemo();
decrement();

console.log(`Final count: ${count}`);
