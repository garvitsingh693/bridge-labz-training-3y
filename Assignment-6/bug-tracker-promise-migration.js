// Assignment 6 - Q3: Convert callback-based bug fetching to a Promise.
function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const apiFailed = Math.random() < 0.3;

            if (apiFailed) {
                reject(new Error("Bug tracker API request failed."));
                return;
            }

            resolve(["UI glitch", "API timeout", "Login failure"]);
        }, 1000);
    });
}

getBugs()
    .then(bugs => {
        console.log("Fetched bugs:");
        console.table(bugs.map((description, index) => ({
            number: index + 1,
            description
        })));
    })
    .catch(error => console.error("Unable to fetch bugs:", error.message));
