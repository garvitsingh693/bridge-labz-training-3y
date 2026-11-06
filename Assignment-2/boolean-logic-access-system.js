// Q5. Boolean Logic Access System

// Security condition values for the smart home.
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

// Check all required security conditions.
function checkSecurity() {
    const isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

    // Use ! to display the opposite condition as well.
    if (isSecure) {
        console.log("Secure");
    } else if (!isSecure || (isDoorLocked || isWindowClosed)) {
        console.log("Unsafe");
    }
}

// Test 1: all conditions are satisfied.
console.log("Test 1:");
checkSecurity();

// Test 2: window is open.
isWindowClosed = false;
console.log("Test 2:");
checkSecurity();

// Test 3: restore window, but turn alarm off.
isWindowClosed = true;
isAlarmOn = false;
console.log("Test 3:");
checkSecurity();

// Test 4: alarm on and owner inside, all conditions satisfied again.
isAlarmOn = true;
console.log("Test 4:");
checkSecurity();
