"use strict";

// Q9. JSON Audit
const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const auditErrors = [];
const under18Users = [];

for (let index = 0; index < rawData.length; index++) {
    const lineNumber = index + 1;

    try {
        // JSON.parse throws a SyntaxError for malformed JSON.
        const parsedEntry = JSON.parse(rawData[index]);

        // Check required keys separately from JSON syntax.
        if (!Object.prototype.hasOwnProperty.call(parsedEntry, "user") ||
            !Object.prototype.hasOwnProperty.call(parsedEntry, "age")) {
            throw new Error("Missing required key: user or age.");
        }

        const numericAge = Number(parsedEntry.age);
        if (!Number.isFinite(numericAge)) {
            throw new TypeError("Age must be a valid number.");
        }

        const cleanEntry = { ...parsedEntry, age: numericAge };
        cleanData.push(cleanEntry);

        if (numericAge < 18) {
            under18Users.push(cleanEntry);
        }
        console.log(`Line ${lineNumber}: valid JSON record for ${cleanEntry.user}`);
    } catch (error) {
        auditErrors.push({ line: lineNumber, type: error.name, message: error.message });
        console.log(`Line ${lineNumber}: ERROR - ${error.message}`);
    }
}

console.log("Clean data:", cleanData);
console.log("Audit errors:", auditErrors);
console.log("Users under 18:", under18Users);

// Debug note: set a breakpoint inside try and catch. Step through JSON.parse;
// when it throws, execution jumps directly to catch for that iteration.
