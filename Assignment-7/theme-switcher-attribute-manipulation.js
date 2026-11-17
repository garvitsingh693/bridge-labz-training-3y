// Assignment 7 - Q4: Switch Light, Dark, and Blue themes using attributes.
document.addEventListener("DOMContentLoaded", () => {
    const style = document.createElement("style");
    style.textContent = `
        body { font-family: Arial, sans-serif; padding: 20px; }
        body.light-theme { background: #fff; color: #222; }
        body.dark-theme { background: #222; color: #fff; }
        body.blue-theme { background: #dceeff; color: #073763; }
        button { margin: 5px; padding: 8px 12px; }
    `;
    document.head.appendChild(style);

    const heading = document.createElement("h2");
    heading.textContent = "Theme Switcher";
    document.body.appendChild(heading);

    ["light", "dark", "blue"].forEach(theme => {
        const button = document.createElement("button");
        button.textContent = theme[0].toUpperCase() + theme.slice(1);
        button.addEventListener("click", () => {
            // setAttribute() updates both the CSS class and saved theme.
            document.body.setAttribute("class", theme + "-theme");
            document.body.setAttribute("data-theme", theme);
        });
        document.body.appendChild(button);
    });

    document.body.setAttribute("class", "light-theme");
    document.body.setAttribute("data-theme", "light");
});
