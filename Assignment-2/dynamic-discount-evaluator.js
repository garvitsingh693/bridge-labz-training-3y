// Q8. Dynamic Discount Evaluator

const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

// Calculate the original cart value with reduce().
const originalTotal = cart.reduce((total, product) => total + product.price, 0);

let discountedSubtotal = 0;

// Apply the category discount to each product.
for (const product of cart) {
    let discountRate = 0;

    if (product.category === "electronics") {
        discountRate = 0.10;
    } else if (product.category === "fashion") {
        discountRate = 0.05;
    }

    const discountedPrice = product.price * (1 - discountRate);
    discountedSubtotal += discountedPrice;

    console.log(
        `${product.item}: ₹${product.price.toFixed(2)} -> ₹${discountedPrice.toFixed(2)}`
    );
}

// Apply an additional 5% discount if the original cart value exceeds ₹50,000.
let finalTotal = discountedSubtotal;
if (originalTotal > 50000) {
    finalTotal *= 0.95;
    console.log("Extra 5% cart discount applied.");
}

console.log(`Original cart value: ₹${originalTotal.toFixed(2)}`);
console.log(`Final amount to pay: ₹${finalTotal.toFixed(2)}`);
