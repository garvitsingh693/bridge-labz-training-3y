// Assignment 6 - Q10: Sequential asynchronous food-delivery pipeline.
function deliveryStep(stepName, successMessage) {
    return new Promise((resolve, reject) => {
        const delay = 1000 + Math.floor(Math.random() * 1000);

        setTimeout(() => {
            // Each step has a small chance of failure.
            if (Math.random() < 0.15) {
                reject(new Error(stepName + " failed"));
                return;
            }

            console.log(successMessage);
            resolve();
        }, delay);
    });
}

async function runPipeline() {
    console.log("Start Pipeline");

    try {
        await deliveryStep("takeOrder", "Step 1: Order taken");
        await deliveryStep("prepare", "Step 2: Food prepared");
        await deliveryStep("pack", "Step 3: Package ready");
        await deliveryStep("dispatch", "Step 4: Out for delivery");
        await deliveryStep("deliver", "Delivery completed!");
    } catch (error) {
        console.error("Pipeline failed!", error.message);
    }
}

// Each await pauses this async function until its Promise settles.
// The JavaScript event loop remains free to process other work.
runPipeline();
