// Assignment 7 - Q2: Text area with a 100-character limit.
document.addEventListener("DOMContentLoaded", () => {
    const textArea = document.createElement("textarea");
    textArea.maxLength = 100;
    textArea.placeholder = "Type up to 100 characters";

    const counter = document.createElement("p");
    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset";
    document.body.append(textArea, counter, resetButton);

    function updateCounter() {
        const remaining = 100 - textArea.value.length;
        counter.textContent = remaining + " characters remaining";
        counter.style.color = remaining === 0 ? "red" :
            remaining <= 20 ? "goldenrod" : "green";
    }

    // Prevent additional printable input at the limit.
    textArea.addEventListener("keydown", event => {
        const allowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight",
            "ArrowUp", "ArrowDown", "Tab", "Home", "End"];
        if (textArea.value.length >= 100 &&
            !allowedKeys.includes(event.key) &&
            !(event.ctrlKey || event.metaKey)) {
            event.preventDefault();
        }
    });

    // Prevent pasted text from exceeding the remaining character count.
    textArea.addEventListener("paste", event => {
        const pastedText = event.clipboardData.getData("text");
        const available = 100 - textArea.value.length;
        if (pastedText.length > available) event.preventDefault();
    });

    textArea.addEventListener("input", updateCounter);
    resetButton.addEventListener("click", () => {
        textArea.value = "";
        updateCounter();
        textArea.focus();
    });

    updateCounter();
});
