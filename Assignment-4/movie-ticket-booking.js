"use strict";

// Q5. Movie Ticket Booking (run in a browser).
if (typeof document !== "undefined") {
    document.addEventListener("DOMContentLoaded", () => {
        const form = document.createElement("form");
        form.innerHTML = `
            <h2>Movie Ticket Booking</h2>
            <label>Name <input name="name" required></label><br>
            <label>Email <input name="email" type="email" required></label><br>
            <label>Seats (1-10) <input name="seats" type="number" min="1" max="10" required></label><br>
            <button type="submit">Book Tickets</button>
            <p id="booking-result" aria-live="polite"></p>
        `;
        document.body.appendChild(form);

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const name = form.elements.name.value.trim();
            const email = form.elements.email.value.trim();
            const seats = Number(form.elements.seats.value);

            const nameValid = /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/.test(name);
            const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            const seatsValid = Number.isInteger(seats) && seats >= 1 && seats <= 10;

            const result = form.querySelector("#booking-result");
            if (!nameValid || !emailValid || !seatsValid) {
                result.style.color = "red";
                result.textContent = "Invalid input: check name, email, and seat count (1-10).";
                console.log(result.textContent);
                return;
            }

            const booking = { name, email, seats };
            result.style.color = "green";
            result.textContent = `Booking confirmed for ${booking.name}. Email: ${booking.email}. Seats: ${booking.seats}.`;
            console.log("Ticket details:", booking);
        });
    });
} else {
    console.log("Open this file in a browser to use the movie booking form.");
}
