// Q2: Store sample values using several JavaScript data types.
const userName = "Aarav";
const accountBalance = 2450.75;
const isActive = true;
const favoriteColors = ["blue", "green", "black"];
const userProfile = { city: "Agra", membership: "Gold" };
const middleName = null;
let secondaryEmail;

const dataSummary = [
  { label: "User name", value: userName, type: typeof userName },
  { label: "Account balance", value: accountBalance, type: typeof accountBalance },
  { label: "Active account", value: isActive, type: typeof isActive },
  { label: "Favorite colors", value: favoriteColors.join(", "), type: Array.isArray(favoriteColors) ? "array" : typeof favoriteColors },
  { label: "User profile", value: JSON.stringify(userProfile), type: typeof userProfile },
  { label: "Middle name", value: middleName, type: middleName === null ? "null" : typeof middleName },
  { label: "Secondary email", value: secondaryEmail, type: typeof secondaryEmail }
];

// One table displays the label, value and detected type for every entry.
console.table(dataSummary);
