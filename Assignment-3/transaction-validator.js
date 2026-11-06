"use strict";

// Q3. Transaction Validator
const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const validTransactions = [];
const invalidTransactions = [];

// Custom error classes make error categories easy to identify.
class NegativeAmountError extends Error {}
class MissingTransactionDataError extends Error {}
class NullTransactionError extends Error {}

for (const transaction of transactions) {
    try {
        // In VS Code, add a breakpoint on the next line and watch
        // transaction, validTransactions, and invalidTransactions.
        if (transaction === null) {
            throw new NullTransactionError("Transaction entry is null.");
        }
        if (transaction.id === undefined || transaction.amount === undefined) {
            throw new MissingTransactionDataError("Transaction id or amount is missing.");
        }
        if (transaction.amount < 0) {
            throw new NegativeAmountError("Transaction amount cannot be negative.");
        }

        validTransactions.push(transaction);
        console.log(`Valid transaction: ID ${transaction.id}, amount ₹${transaction.amount}`);
    } catch (error) {
        invalidTransactions.push({ transaction, category: error.constructor.name, message: error.message });
        console.log(`Invalid transaction: ${error.constructor.name} - ${error.message}`);
    }
}

console.log("Valid transactions:", validTransactions);
console.log("Invalid transactions:", invalidTransactions);
console.log(`Successful: ${validTransactions.length} | Failed: ${invalidTransactions.length}`);

// Debug observation: each loop iteration gets its own transaction value;
// the catch block records an error and lets the loop continue.
