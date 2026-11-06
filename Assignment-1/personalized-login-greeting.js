// Q1: Display a greeting based on the current hour.
const userName = "Aarav";
const currentHour = new Date().getHours();

let greeting;
if (currentHour < 12) {
  greeting = "Good Morning";
} else if (currentHour >= 12 && currentHour <= 17) {
  greeting = "Good Afternoon";
} else {
  greeting = "Good Evening";
}

// Template literals make it easy to include the user's name.
console.log(`${greeting} ${userName}!`);
