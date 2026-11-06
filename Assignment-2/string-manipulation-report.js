// Q2. String Manipulation Report

// Product name may contain extra spaces and mixed capitalization.
const productName = " wireless headphones PRO ";

// Remove spaces at the beginning and end, then convert to lowercase.
const trimmedName = productName.trim().toLowerCase();

// Capitalize the first letter of every word using map().
const capitalizedWords = trimmedName.split(" ").map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
});

// Join the words and replace "Pro" with the requested edition name.
const formattedName = capitalizedWords.join(" ").replace("Pro", "Pro Edition");

console.log(`Cleaned product title: ${formattedName}`);
console.log(`Title length: ${formattedName.length}`);
