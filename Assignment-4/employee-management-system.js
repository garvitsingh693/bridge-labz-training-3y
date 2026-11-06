"use strict";

// Q6. Employee Management System
class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary; // Monthly salary
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        if (percent < 0) {
            throw new RangeError("Bonus percentage cannot be negative.");
        }
        this.salary += this.salary * (percent / 100);
    }
}

const employees = [
    new Employee(1, "Aarav", "HR", 35000),
    new Employee(2, "Diya", "Finance", 42000),
    new Employee(3, "Kabir", "Technology", 55000),
    new Employee(4, "Meera", "Marketing", 39000),
    new Employee(5, "Rohan", "Support", 30000)
];

// Apply a sample 5% bonus to each employee before annual calculations.
employees.forEach((employee) => employee.applyBonus(5));

employees.forEach((employee) => {
    console.log(`ID: ${employee.id} | ${employee.name} | ${employee.department} | Annual salary: ₹${employee.getAnnualSalary().toFixed(2)}`);
});

// reduce() calculates the company's total annual salary payout.
const totalAnnualPayout = employees.reduce((total, employee) => {
    return total + employee.getAnnualSalary();
}, 0);

console.log(`Total annual company payout: ₹${totalAnnualPayout.toFixed(2)}`);
