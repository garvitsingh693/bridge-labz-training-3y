// Assignment 7 - Q3: Three-step form with validation and summary.
document.addEventListener("DOMContentLoaded", () => {
    const fields = [
        { label: "Name", type: "text", placeholder: "Enter your name" },
        { label: "Email", type: "email", placeholder: "Enter your email" },
        { label: "Password", type: "password", placeholder: "At least 6 characters" }
    ];
    const values = ["", "", ""];
    let currentStep = 0;

    const title = document.createElement("h2");
    const label = document.createElement("label");
    const input = document.createElement("input");
    const message = document.createElement("p");
    const backButton = document.createElement("button");
    const nextButton = document.createElement("button");
    backButton.textContent = "Back";
    nextButton.textContent = "Next";
    document.body.append(title, label, input, message, backButton, nextButton);

    function isValid(index, value) {
        if (index === 0) return value.trim().length > 0;
        if (index === 1) return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        return value.length >= 6;
    }

    function renderStep() {
        const field = fields[currentStep];
        title.textContent = "Step " + (currentStep + 1) + " of 3";
        label.textContent = field.label + ": ";
        input.type = field.type;
        input.placeholder = field.placeholder;
        input.value = values[currentStep];
        message.textContent = "";
        backButton.disabled = currentStep === 0;
        nextButton.textContent = currentStep === 2 ? "Submit" : "Next";
    }

    backButton.addEventListener("click", () => {
        if (currentStep > 0) {
            values[currentStep] = input.value;
            currentStep--;
            renderStep();
        }
    });

    nextButton.addEventListener("click", () => {
        values[currentStep] = input.value;
        if (!isValid(currentStep, input.value)) {
            message.textContent = "Please enter a valid " + fields[currentStep].label + ".";
            message.style.color = "red";
            return;
        }

        if (currentStep < 2) {
            currentStep++;
            renderStep();
        } else {
            title.textContent = "Form Summary";
            label.textContent = "Name: " + values[0] +
                " | Email: " + values[1] + " | Password: " + "*".repeat(values[2].length);
            input.remove();
            message.textContent = "All three steps completed successfully.";
            backButton.remove();
            nextButton.remove();
        }
    });

    renderStep();
});
