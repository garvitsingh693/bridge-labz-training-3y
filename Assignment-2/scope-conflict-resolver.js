// Q1. Scope Conflict Resolver

// Global variable: available outside calculateSalary().
let bonus = 5000;

// The parameter is local to this function.
function calculateSalary(isPermanent) {
    // Local variable: available only inside this function.
    let salary = 40000;

    // Add the global bonus only for permanent employees.
    let totalSalary = salary;
    if (isPermanent === true) {
        totalSalary += bonus;
    }

    console.log(`Permanent employee: ${isPermanent}`);
    console.log(`Total salary: ₹${totalSalary}`);
}

// Test both values of the local parameter.
calculateSalary(true);
calculateSalary(false);

// Changing the local parameter does not change the global bonus.
console.log(`Global bonus remains: ₹${bonus}`);
