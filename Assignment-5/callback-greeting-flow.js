// Q1: Demonstrate how a callback function works.

// This function greets the user and then calls the supplied callback.
function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    console.log("Calling the callback now...");
    callback();
}

// This function will be passed as a callback.
function showEndMessage() {
    console.log("Welcome to the course!");
}

// Pass showEndMessage as an argument (do not call it here).
greetUser("Aarav", showEndMessage);

// Flow: greetUser runs first, then it invokes showEndMessage.
