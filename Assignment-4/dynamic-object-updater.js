"use strict";

// Q8. Dynamic Object Updater (run in a browser).
const user = { name: "John", email: "john@mail.com", age: 21 };

if (typeof document !== "undefined") {
    document.addEventListener("DOMContentLoaded", () => {
        const section = document.createElement("section");
        section.innerHTML = `
            <h2>Edit User Details</h2>
            <form id="user-form">
                <label>Name <input name="name" required></label><br>
                <label>Email <input name="email" type="email" required></label><br>
                <label>Age <input name="age" type="number" min="0" required></label><br>
                <button type="submit">Update User</button>
            </form>
            <h3>Updated Object</h3>
            <pre id="user-output"></pre>
        `;
        document.body.appendChild(section);

        const form = section.querySelector("#user-form");
        const output = section.querySelector("#user-output");

        // Fill the form with the starting object values.
        Object.entries(user).forEach(([key, value]) => {
            form.elements[key].value = value;
        });
        output.textContent = JSON.stringify(user, null, 2);

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            // Update the same object when the form is submitted.
            user.name = form.elements.name.value.trim();
            user.email = form.elements.email.value.trim();
            user.age = Number(form.elements.age.value);

            output.textContent = JSON.stringify(user, null, 2);
            console.log("Updated user object:", user);
        });
    });
} else {
    console.log("Initial user object:", user);
    console.log("Open this file in a browser to edit the object through the form.");
}
