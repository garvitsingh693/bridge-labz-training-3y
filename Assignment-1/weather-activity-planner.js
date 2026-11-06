// Q5: Suggest an activity using weather conditions.
const temperature = 22;
const isRaining = false;
const windSpeed = 12;

if (isRaining) {
  console.log("Stay indoors with hot coffee.");
} else if (temperature > 35 && !isRaining) {
  console.log("Go swimming.");
} else if (temperature < 15 && windSpeed > 20) {
  console.log("Too cold and windy — stay home.");
} else if ((temperature >= 15 && temperature <= 35) || windSpeed <= 20) {
  console.log("Perfect day for a walk.");
} else {
  console.log("Consider a comfortable indoor activity.");
}
