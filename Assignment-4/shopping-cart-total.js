"use strict";

// Q9. Shopping Cart Total: class, reduce(), and coupon RegExp.
class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        if (!name || price < 0 || !Number.isInteger(quantity) || quantity <= 0) {
            throw new Error("Enter a name, non-negative price, and positive whole-number quantity.");
        }
        this.items.push({ name, price, quantity });
    }

    getTotal() {
        return this.items.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
    }

    applyCoupon(couponCode) {
        // Coupon must begin with SAVE or DISC and end with a percentage number.
        const match = /^(SAVE|DISC)(\d{1,2})$/.exec(couponCode);
        if (!match) {
            throw new Error("Invalid coupon. Use a code such as SAVE20 or DISC10.");
        }

        const discountPercent = Number(match[2]);
        if (discountPercent <= 0 || discountPercent > 100) {
            throw new Error("Coupon discount must be between 1% and 100%.");
        }

        const originalTotal = this.getTotal();
        const finalTotal = originalTotal * (1 - discountPercent / 100);
        return { originalTotal, discountPercent, finalTotal };
    }
}

const cart = new Cart();
cart.addItem("Keyboard", 1500, 1);
cart.addItem("Mouse", 700, 2);
cart.addItem("USB Cable", 250, 3);

console.log("Cart items:", cart.items);
console.log(`Cart total: ₹${cart.getTotal().toFixed(2)}`);

try {
    const couponResult = cart.applyCoupon("SAVE20");
    console.log(`Coupon discount: ${couponResult.discountPercent}%`);
    console.log(`Final total: ₹${couponResult.finalTotal.toFixed(2)}`);
} catch (error) {
    console.log("Coupon error:", error.message);
}
