// Assignment 6 - Q5: First show nested callbacks, then async/await.
function runStage(stageName, callback) {
    setTimeout(() => {
        console.log(stageName);
        callback();
    }, 1000);
}

console.log("Callback version starting...");
runStage("Design", () => {
    runStage("Build", () => {
        runStage("Test", () => {
            runStage("Deploy", () => {
                runStage("Celebrate", () => {
                    console.log("Callback pipeline completed.");
                    runAsyncPipeline();
                });
            });
        });
    });
});

// Promise-based stage used by the async/await version.
function stagePromise(stageName) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(stageName);
            resolve();
        }, 1000);
    });
}

async function runAsyncPipeline() {
    console.log("Async/await version starting...");
    await stagePromise("Design");
    await stagePromise("Build");
    await stagePromise("Test");
    await stagePromise("Deploy");
    await stagePromise("Celebrate");
    console.log("Async/await pipeline completed.");
}

// async/await keeps sequential asynchronous steps readable from top
// to bottom and avoids deeply nested callback indentation.
