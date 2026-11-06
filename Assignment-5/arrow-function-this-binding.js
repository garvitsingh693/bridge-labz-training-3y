// Q3: Compare the value of this in arrow and normal functions.

const user = {
    name: "Aarav",

    // Arrow functions do not get their own this value.
    // They use this from the surrounding (lexical) scope.
    showName: () => {
        console.log("Arrow function this.name:", this.name);
    }
};

user.showName(); // In a Node.js CommonJS file, this.name is normally undefined.

// Fix: use a normal method, which receives this from the call site.
const correctedUser = {
    name: "Aarav",

    showName: function () {
        console.log("Normal function this.name:", this.name);
    }
};

correctedUser.showName(); // Aarav

// Explanation: when correctedUser.showName() is called,
// this refers to correctedUser. An arrow function does not bind this
// to the object that contains it.
