// Assignment 7 - Q1: Product list with delegated Edit/Delete events.
// This file builds its own HTML so it can be tested by loading it in a browser.

document.addEventListener("DOMContentLoaded", () => {
    const heading = document.createElement("h2");
    heading.textContent = "Product List Manager";

    const input = document.createElement("input");
    input.placeholder = "Enter product name";

    const addButton = document.createElement("button");
    addButton.textContent = "Add Product";

    const list = document.createElement("ul");
    document.body.append(heading, input, addButton, list);

    function addProduct(productName) {
        const item = document.createElement("li");
        const name = document.createElement("span");
        name.textContent = productName;

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.dataset.action = "edit";

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.dataset.action = "delete";

        item.append(name, " ", editButton, " ", deleteButton);
        list.appendChild(item);
    }

    addButton.addEventListener("click", () => {
        const productName = input.value.trim();
        if (!productName) return;
        addProduct(productName);
        input.value = "";
    });

    let activeEdit = null;

    function saveActiveEdit() {
        if (!activeEdit) return;
        const item = activeEdit.closest("li");
        const name = item.querySelector("span");
        name.textContent = activeEdit.value.trim() || name.dataset.previousName;
        activeEdit.replaceWith(name);
        activeEdit = null;
    }

    // One listener on the parent handles all current and future buttons.
    list.addEventListener("click", event => {
        const button = event.target.closest("button[data-action]");
        if (!button) return;

        const item = button.closest("li");
        if (button.dataset.action === "delete") {
            if (activeEdit && item.contains(activeEdit)) activeEdit = null;
            item.remove();
        } else if (button.dataset.action === "edit") {
            saveActiveEdit();
            const name = item.querySelector("span");
            const editor = document.createElement("input");
            editor.value = name.textContent;
            name.dataset.previousName = name.textContent;
            name.replaceWith(editor);
            activeEdit = editor;
            editor.focus();
            editor.addEventListener("keydown", keyEvent => {
                if (keyEvent.key === "Enter") saveActiveEdit();
                if (keyEvent.key === "Escape") {
                    editor.value = editor.dataset.previousName || name.dataset.previousName;
                    saveActiveEdit();
                }
            });
        }
    });

    // Clicking outside the list while editing automatically saves.
    document.addEventListener("click", event => {
        if (activeEdit && !list.contains(event.target)) saveActiveEdit();
    });
});
