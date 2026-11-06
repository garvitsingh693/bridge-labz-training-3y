// Q4. Array Performance Analyzer

// Generate 8 random integer scores between 30 and 100.
const scores = Array.from({ length: 8 }, () => {
    return Math.floor(Math.random() * 71) + 30;
});

// Use map() to create a numbered score list.
const numberedScores = scores.map((score, index) => `Student ${index + 1}: ${score}`);

// Find the highest and lowest scores.
const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);

// Use reduce() to calculate the total and average.
const totalScore = scores.reduce((total, score) => total + score, 0);
const averageScore = totalScore / scores.length;

// Use filter() to count students who passed.
const passedStudents = scores.filter((score) => score >= 50);

console.log("Array Performance Analyzer");
console.log(numberedScores.join("\n"));
console.log(`Highest score: ${highestScore}`);
console.log(`Lowest score: ${lowestScore}`);
console.log(`Average score: ${averageScore.toFixed(2)}`);
console.log(`Students passed: ${passedStudents.length} out of ${scores.length}`);
