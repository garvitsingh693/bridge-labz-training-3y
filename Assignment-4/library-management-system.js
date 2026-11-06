"use strict";

// Q3. Library Management System
class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (this.isIssued) {
            console.log(`"${this.title}" is already issued.`);
            return false;
        }
        this.isIssued = true;
        console.log(`Issued: "${this.title}"`);
        return true;
    }

    returnBook() {
        if (!this.isIssued) {
            console.log(`"${this.title}" was not issued.`);
            return false;
        }
        this.isIssued = false;
        console.log(`Returned: "${this.title}"`);
        return true;
    }
}

const books = [
    new Book("The Alchemist", "Paulo Coelho", "ISBN101"),
    new Book("Wings of Fire", "A. P. J. Abdul Kalam", "ISBN102"),
    new Book("Atomic Habits", "James Clear", "ISBN103", true)
];

console.log("Available books:");
books.filter((book) => !book.isIssued).forEach((book) => {
    console.log(`${book.title} by ${book.author} | ISBN: ${book.isbn}`);
});

// Simulate a user searching by ISBN and issuing the matching book.
const requestedIsbn = "ISBN102";
const selectedBook = books.find((book) => book.isbn === requestedIsbn);

if (selectedBook) {
    selectedBook.issueBook();
} else {
    console.log("Book not found.");
}

console.log("Available books after issue:");
books.filter((book) => !book.isIssued).forEach((book) => console.log(book.title));
