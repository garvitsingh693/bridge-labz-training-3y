// Assignment 7 - Q9: Validate fields, prevent invalid submission, and clear errors live.
document.addEventListener("DOMContentLoaded", () => {
    const form = document.createElement("form");
    const fields = [
        { name: "Name", type: "text", placeholder: "Name is required" },
        { name: "Email", type: "email", placeholder: "Email must contain @" },
        { name: "Password", type: "password", placeholder: "Minimum 6 characters" }
    ];
    const inputs = {};
    const errors = {};

    fields.forEach(field => {
        const label = document.createElement("label");
        label.textContent = field.name + ": ";
        const input = document.createElement("input");
        input.type = field.type;
        input.placeholder = field.placeholder;
        input.required = true;
        const error = document.createElement("small");
        error.style.color = "red";
        error.style.display = "block";
        inputs[field.name] = input;
        errors[field.name] = error;
        label.appendChild(input);
        form.append(label, error);
    });

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Submit";
    const success = document.createElement("p");
    success.style.color = "green";
    form.append(submitButton, success);
    document.body.appendChild(form);

    function validate(fieldName) {
        const value = inputs[fieldName].value.trim();
        let errorMessage = "";

        if (fieldName === "Name" && !value) {
            errorMessage = "Name is required.";
        } else if (fieldName === "Email" && (!value || !value.includes("@"))) {
            errorMessage = "Enter an email containing @.";
        } else if (fieldName === "Password" && value.length < 6) {
            errorMessage = "Password must be at least 6 characters.";
        }

        errors[fieldName].textContent = errorMessage;
        return errorMessage === "";
    }

    fields.forEach(field => {
        inputs[field.name].addEventListener("input", () => {
            validate(field.name);
            success.textContent = "";
        });
    });

    form.addEventListener("submit", event => {
        event.preventDefault();

        const valid = fields.map(field => validate(field.name)).every(Boolean);
        if (valid) {
            success.textContent = "Form Submitted Successfully";
        } else {
            success.textContent = "";
        }
    });
});
