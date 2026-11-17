// Assignment 7 - Q8: Custom dropdown without a select element.
document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.createElement("div");
    wrapper.style.position = "relative";
    wrapper.style.display = "inline-block";

    const toggle = document.createElement("button");
    toggle.textContent = "Choose an option";
    const options = document.createElement("div");
    options.style.cssText = "display:none; position:absolute; top:100%; left:0; " +
        "background:white; border:1px solid #888; min-width:160px; z-index:2;";

    ["JavaScript", "Python", "Java", "C++"].forEach(optionText => {
        const option = document.createElement("button");
        option.textContent = optionText;
        option.style.display = "block";
        option.style.width = "100%";
        option.addEventListener("click", () => {
            toggle.textContent = optionText;
            options.style.display = "none";
        });
        options.appendChild(option);
    });

    toggle.addEventListener("click", () => {
        options.style.display = options.style.display === "block" ? "none" : "block";
    });

    wrapper.append(toggle, options);
    document.body.appendChild(wrapper);

    // Capture phase runs before bubbling listeners. It closes the menu
    // for clicks outside the wrapper, while inside clicks remain usable.
    document.addEventListener("click", event => {
        if (!wrapper.contains(event.target)) {
            options.style.display = "none";
        }
    }, true);
});
