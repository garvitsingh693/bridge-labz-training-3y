// Q8: Project salary over five years with annual increments.
const currentSalary = 45000;
const annualIncrementRate = 8; // Percentage increase each year.
let projectedSalary = currentSalary;

const salaryReport = [];

for (let year = 1; year <= 5; year++) {
  // Increase the salary by the annual percentage.
  projectedSalary *= 1 + annualIncrementRate / 100;
  projectedSalary = Math.round(projectedSalary);

  salaryReport.push({
    year: year,
    salary: "₹" + projectedSalary.toLocaleString("en-IN")
  });
}

console.table(salaryReport);
