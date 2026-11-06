"use strict";

// Q1. Dynamic Data Parser
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const validNumbers = [];
const invalidNumbers = [];
const conversionReport = [];

for (const value of apiData) {
    // Convert each input into all three requested forms.
    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    // Number.isNaN identifies values that cannot be used as numbers.
    // Whitespace-only strings are explicitly treated as invalid too.
    const isBlankString = typeof value === "string" && value.trim() === "";
    if (Number.isNaN(numberValue) || isBlankString) {
        invalidNumbers.push(value);
        conversionReport.push({ original: value, number: numberValue, boolean: booleanValue, string: stringValue, status: "Invalid number" });
    } else {
        validNumbers.push(numberValue);
        conversionReport.push({ original: value, number: numberValue, boolean: booleanValue, string: stringValue, status: "Valid number" });
    }
}

// Print a detailed report without hiding special values.
console.log("Conversion report:");
for (const item of conversionReport) {
    console.log(`Original: ${String(item.original)} | Number: ${item.number} | Boolean: ${item.boolean} | String: "${item.string}" | ${item.status}`);
}
console.log("Valid numeric data:", validNumbers);
console.log("Invalid numeric data:", invalidNumbers);
