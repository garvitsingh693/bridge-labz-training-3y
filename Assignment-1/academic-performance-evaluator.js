// Q4: Evaluate marks for five subjects.
// Replace these sample marks with the student's actual marks.
const marks = [88, 91, 76, 84, 90];
const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
const average = totalMarks / marks.length;
const percentage = (totalMarks / (marks.length * 100)) * 100;

const hasInvalidMarks = marks.some(mark => mark < 0 || mark > 100);
const hasFailedSubject = marks.some(mark => mark < 35);

console.log("Average: " + average.toFixed(2));
console.log("Overall percentage: " + percentage.toFixed(2) + "%");

// A failed subject or invalid mark prevents promotion.
if (hasInvalidMarks || hasFailedSubject) {
  console.log("Detained");
} else if (percentage >= 85 && marks.every(mark => mark >= 35)) {
  console.log("Promoted with Distinction");
} else if (percentage >= 50 && percentage < 85) {
  console.log("Promoted");
} else {
  console.log("Detained");
}
