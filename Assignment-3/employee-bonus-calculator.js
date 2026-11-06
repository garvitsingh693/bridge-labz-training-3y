"use strict";

// Q2. Employee Bonus Calculator
const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

for (const employee of employees) {
    try {
        // Validate required properties before converting them.
        if (!employee || employee.name === undefined ||
            employee.salary === undefined || employee.years === undefined) {
            throw new Error("Employee data is missing a required property.");
        }

        const salary = Number(employee.salary);
        const years = Number(employee.years);

        if (!Number.isFinite(salary) || !Number.isFinite(years)) {
            throw new TypeError("Salary and years must be valid numbers.");
        }

        const bonusRate = years > 3 ? 0.10 : 0.05;
        const bonus = salary * bonusRate;
        const totalPay = salary + bonus;

        console.log(`Employee: ${employee.name} | Salary: ₹${salary.toFixed(2)} | Experience: ${years} years | Bonus: ₹${bonus.toFixed(2)} | Total: ₹${totalPay.toFixed(2)}`);
    } catch (error) {
        console.log(`Could not process employee: ${error.message}`);
    }
}

// Strict mode prevents accidental assignment to undeclared variables.
// All variables above are explicitly declared with const.
