"use strict";

// Q2. Student Form Validator (run in a browser).
// This file creates its own form, so no separate HTML file is required.
if (typeof document !== "undefined") {
    document.addEventListener("DOMContentLoaded", () => {
        const form = document.createElement("form");
        form.innerHTML = `
            <h2>Student Registration</h2>
            <label>Name <input name="name" type="text" required></label><br>
            <label>Email <input name="email" type="email" required></label><br>
            <label>Phone <input name="phone" type="tel" required></label><br>
            <label>Password <input name="password" type="password" required></label><br>
            <button type="submit">Register</button>
            <p id="form-message" aria-live="polite"></p>
        `;
        document.body.appendChild(form);

        const rules = {
            name: /^[A-Za-z]+$/,
            email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            phone: /^\d{10}$/,
            password: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
        };

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            let allValid = true;

            Object.entries(rules).forEach(([fieldName, pattern]) => {
                const input = form.elements[fieldName];
                const isValid = pattern.test(input.value.trim());
                input.style.border = isValid ? "2px solid green" : "2px solid red";
                input.setAttribute("aria-invalid", String(!isValid));
                if (!isValid) allValid = false;
            });

            const message = form.querySelector("#form-message");
            message.textContent = allValid
                ? "Registration details are valid."
                : "Please correct the fields marked with a red border.";
            message.style.color = allValid ? "green" : "red";
            console.log(message.textContent);
        });
    });
} else {
    console.log("Open this JavaScript file in a browser with a document to use the form.");
}
