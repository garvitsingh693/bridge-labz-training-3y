// Assignment 7 - Q7: Track mouse coordinates and double-click positions.
document.addEventListener("DOMContentLoaded", () => {
    const box = document.createElement("div");
    box.style.cssText = "width:400px; height:400px; border:2px solid #333; " +
        "position:relative; overflow:hidden; background:#f5f5f5;";
    const coordinates = document.createElement("p");
    coordinates.textContent = "Move the mouse inside the box.";
    document.body.append(coordinates, box);

    box.addEventListener("mousemove", event => {
        coordinates.textContent =
            "clientX: " + event.clientX + ", clientY: " + event.clientY;
    });

    box.addEventListener("dblclick", event => {
        const bounds = box.getBoundingClientRect();
        const dot = document.createElement("span");
        dot.style.cssText = "position:absolute; width:10px; height:10px; " +
            "border-radius:50%; background:red; pointer-events:none;";
        dot.style.left = (event.clientX - bounds.left - 5) + "px";
        dot.style.top = (event.clientY - bounds.top - 5) + "px";
        box.appendChild(dot);
    });
});
