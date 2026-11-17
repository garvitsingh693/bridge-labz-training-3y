// Assignment 6 - Q1: Async Coffee Maker
// Each step returns a Promise and takes a random 1–2 seconds.

function delay(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function runCoffeeStep(stepName) {
    return delay(1000 + Math.floor(Math.random() * 1000)).then(() => {
        // Random failure lets us demonstrate the catch() handler.
        if (Math.random() < 0.15) {
            throw new Error(stepName + " failed.");
        }
        console.log(stepName + " completed.");
    });
}

runCoffeeStep("Boiling water")
    .then(() => runCoffeeStep("Brewing coffee"))
    .then(() => runCoffeeStep("Pouring coffee into a cup"))
    .then(() => console.log("Coffee ready for the team!"))
    .catch(error => console.error("Coffee process failed:", error.message));
