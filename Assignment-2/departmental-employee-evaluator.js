// Q10. Departmental Employee Evaluator

const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

// Evaluate each department's performance score.
for (const department of departments) {
    const departmentName = department[0];
    const score = department[1];
    let performance;

    // Nested if-else conditions classify the score.
    if (score >= 90) {
        performance = "Excellent";
    } else {
        if (score >= 75) {
            performance = "Good";
        } else {
            if (score >= 60) {
                performance = "Average";
            } else {
                performance = "Needs Improvement";
            }
        }
    }

    console.log(`${departmentName}: Score = ${score}, Rating = ${performance}`);
}
