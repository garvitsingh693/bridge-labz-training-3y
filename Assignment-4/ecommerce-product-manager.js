"use strict";

// Q1. E-Commerce Product Manager: classes, objects, arrays, and filter.
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        if (percent < 0 || percent > 100) {
            throw new RangeError("Discount must be between 0 and 100.");
        }
        this.price -= this.price * (percent / 100);
    }

    displayDetails() {
        return `ID: ${this.id} | ${this.name} | Category: ${this.category} | Price: ₹${this.price.toFixed(2)}`;
    }
}

const products = [
    new Product(1, "Laptop", 55000, "Electronics"),
    new Product(2, "Headphones", 1800, "Electronics"),
    new Product(3, "Notebook", 120, "Stationery"),
    new Product(4, "Office Chair", 4500, "Furniture")
];

// Apply a 10% discount to one product.
products[1].applyDiscount(10);

console.log("All products:");
products.forEach((product) => console.log(product.displayDetails()));

console.log("\nProducts priced above ₹1000:");
const premiumProducts = products.filter((product) => product.price > 1000);
premiumProducts.forEach((product) => console.log(product.displayDetails()));
