// Q3: Calculate monthly expenses, average and tax.
const expenses = {
  food: 6500,
  travel: 2200,
  rent: 12000,
  bills: 1800,
  leisure: 1500
};

let totalExpense = 0;

// Add each category amount to the running total.
for (const category in expenses) {
  totalExpense += expenses[category];
}

const categoryCount = Object.keys(expenses).length;
const averageExpense = totalExpense / categoryCount;

// Apply 10% tax using an assignment operator.
let finalAmount = totalExpense;
finalAmount += totalExpense * 0.10;

console.log("Total expenses: ₹" + totalExpense.toFixed(2));
console.log("Average per category: ₹" + averageExpense.toFixed(2));
console.log("Final amount after 10% tax: ₹" + finalAmount.toFixed(2));
