// Q7. Customer Feedback Processor

const feedback = "Great product! Fast delivery and amazing sound quality!";

// Split the feedback into words and count them.
const words = feedback.trim().split(/\s+/);
const wordCount = words.length;

// Convert to lowercase so the checks are case-insensitive.
const lowerCaseFeedback = feedback.toLowerCase();

// Check whether the feedback contains negative words.
const hasNegativeWord =
    lowerCaseFeedback.includes("bad") || lowerCaseFeedback.includes("poor");

// Display the result.
console.log(`Feedback: ${feedback}`);
console.log(`Word count: ${wordCount}`);

if (!hasNegativeWord) {
    console.log("Positive Feedback");
} else {
    console.log("Needs Improvement");
}
