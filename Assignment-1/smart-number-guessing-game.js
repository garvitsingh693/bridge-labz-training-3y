// Q7: Compare a test guess with a random secret number.
const secretNumber = Math.floor(Math.random() * 50) + 1;
const userGuess = 24; // Change this value to test another guess.

console.log("Your guess: " + userGuess);

if (userGuess === secretNumber) {
  console.log("Correct guess!");
} else {
  // Check the distance from the secret number.
  const difference = Math.abs(userGuess - secretNumber);

  if (difference <= 3 && userGuess >= 1 && userGuess <= 50) {
    console.log("Very close!");
  } else if (userGuess > secretNumber) {
    console.log("Too high");
  } else {
    console.log("Too low");
  }
}

console.log("Secret number (for testing): " + secretNumber);
