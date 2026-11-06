// Q6: Apply the discount tier for a sample purchase.
// Change purchaseTotal to test a different shopping amount.
const purchaseTotal = 6500;
let discountPercentage = 0;

if (purchaseTotal >= 10000) {
  discountPercentage = 25;
} else if (purchaseTotal >= 5000) {
  discountPercentage = 15;
} else if (purchaseTotal >= 2000) {
  discountPercentage = 5;
}

const discountAmount = purchaseTotal * (discountPercentage / 100);
const finalPrice = Math.round(purchaseTotal - discountAmount);

console.log("Original total: ₹" + Math.round(purchaseTotal));
console.log("Discount: " + discountPercentage + "%");
console.log("Final price: ₹" + finalPrice);
