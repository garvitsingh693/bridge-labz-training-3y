"use strict";

// Q4. Custom Form Builder (run in a browser).
class FormBuilder {
    constructor(fields, container) {
        this.fields = fields;
        this.container = container;
        this.form = document.createElement("form");
    }

    buildForm() {
        // Create labels and inputs from the supplied field configuration.
        this.fields.forEach((field) => {
            const wrapper = document.createElement("label");
            wrapper.textContent = field.label + " ";

            const input = document.createElement("input");
            input.type = field.type;
            input.name = field.name;
            input.required = Boolean(field.required);

            wrapper.appendChild(input);
            this.form.appendChild(wrapper);
            this.form.appendChild(document.createElement("br"));
        });

        const submitButton = document.createElement("button");
        submitButton.type = "submit";
        submitButton.textContent = "Submit";
        this.form.appendChild(submitButton);

        this.form.addEventListener("submit", (event) => {
            event.preventDefault();
            const formData = this.getFormData();
            console.log("Submitted form data:", formData);
            const output = document.getElementById("form-builder-output");
            output.textContent = JSON.stringify(formData, null, 2);
        });

        this.container.appendChild(this.form);
    }

    getFormData() {
        const values = {};
        this.fields.forEach((field) => {
            const input = this.form.elements[field.name];
            values[field.name] = input.value;
        });
        return values;
    }
}

if (typeof document !== "undefined") {
    document.addEventListener("DOMContentLoaded", () => {
        const container = document.createElement("section");
        container.innerHTML = "<h2>Custom Form Builder</h2><pre id='form-builder-output'></pre>";
        document.body.appendChild(container);

        const builder = new FormBuilder([
            { type: "text", name: "username", label: "Username", required: true },
            { type: "email", name: "email", label: "Email", required: true },
            { type: "password", name: "password", label: "Password", required: true }
        ], container);
        builder.buildForm();
    });
} else {
    console.log("Run this file in a browser to generate and submit the dynamic form.");
}
