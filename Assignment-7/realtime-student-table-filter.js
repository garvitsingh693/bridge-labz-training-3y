// Assignment 7 - Q6: Filter student rows as the user types.
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.createElement("input");
    searchInput.placeholder = "Search by name, branch, or CGPA";

    const table = document.createElement("table");
    table.border = "1";
    table.cellPadding = "8";

    const students = [
        ["Aarav", "CSE", "8.7"],
        ["Diya", "ECE", "9.1"],
        ["Kabir", "IT", "8.2"],
        ["Meera", "CSE", "9.4"],
        ["Rohan", "Mechanical", "7.9"]
    ];

    const header = table.insertRow();
    ["Name", "Branch", "CGPA"].forEach(text => {
        const cell = document.createElement("th");
        cell.textContent = text;
        header.appendChild(cell);
    });

    const body = table.createTBody();
    students.forEach(student => {
        const row = body.insertRow();
        student.forEach(value => {
            row.insertCell().textContent = value;
        });
    });

    const noResults = document.createElement("p");
    noResults.textContent = "No results found";
    noResults.style.display = "none";
    document.body.append(searchInput, table, noResults);

    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase().trim();
        let visibleCount = 0;

        Array.from(body.rows).forEach(row => {
            const matches = row.textContent.toLowerCase().includes(searchTerm);
            row.style.display = matches ? "" : "none";
            if (matches) visibleCount++;
        });

        noResults.style.display = visibleCount === 0 ? "block" : "none";
    });
});
