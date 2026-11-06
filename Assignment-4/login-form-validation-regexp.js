"use strict";

// Q7. Login Form Validation using RegExp (run in a browser).
if (typeof document !== "undefined") {
    document.addEventListener("DOMContentLoaded", () => {
        const form = document.createElement("form");
        form.innerHTML = `
            <h2>Login</h2>
            <label>Username <input name="username" required></label><br>
            <label>Password <input name="password" type="password" required></label><br>
            <button type="submit">Login</button>
            <p id="login-message" aria-live="polite"></p>
        `;
        document.body.appendChild(form);

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const username = form.elements.username.value;
            const password = form.elements.password.value;
            const errors = [];

            if (username.length < 5) {
                errors.push("Username must contain at least 5 characters.");
            }
            if (password.length < 8) {
                errors.push("Password must contain at least 8 characters.");
            }
            if (!/[0-9]/.test(password)) {
                errors.push("Password must include a number.");
            }
            if (!/[A-Z]/.test(password)) {
                errors.push("Password must include an uppercase letter.");
            }
            if (!/[a-z]/.test(password)) {
                errors.push("Password must include a lowercase letter.");
            }
            if (!/[^A-Za-z0-9]/.test(password)) {
                errors.push("Password must include a special character.");
            }

            const message = form.querySelector("#login-message");
            message.style.color = errors.length ? "red" : "green";
            message.textContent = errors.length ? errors.join(" ") : "Login details are valid.";
            console.log(message.textContent);
        });
    });
} else {
    console.log("Open this file in a browser to test the login form.");
}
