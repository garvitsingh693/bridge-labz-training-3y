// Assignment 6 - Q4: Compare Promise.all() and Promise.race().
function contactServer(serverName, responseTime) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(new Error(serverName + " deployment failed"));
            } else {
                resolve(serverName + " responded successfully");
            }
        }, responseTime);
    });
}

// One set of requests is shared by all() and race().
const serverRequests = [
    contactServer("Server A", 2000),
    contactServer("Server B", 3000)
];

Promise.all(serverRequests)
    .then(() => console.log("Deployment completed for all servers"))
    .catch(error => console.error("At least one server failed:", error.message));

Promise.race(serverRequests)
    .then(message => console.log("Fastest response:", message))
    .catch(error => console.error("First response was a failure:", error.message));

// Promise.all waits for every fulfillment; Promise.race settles
// as soon as the first input Promise settles (resolve or reject).
