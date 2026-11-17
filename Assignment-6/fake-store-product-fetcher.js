// Assignment 6 - Q6: Fetch products from Fake Store API.
// Run in a modern browser or Node.js 18+ (which provides fetch).

async function loadProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
            throw new Error("HTTP status " + response.status);
        }

        const products = await response.json();

        products.forEach(product => {
            console.log("Product:", product.title);
            console.log("Price: $" + product.price);
            console.log("Image:", product.image);
            console.log("------------------------------");
        });

        // Optional browser bonus: create simple product cards.
        if (typeof document !== "undefined") {
            const productContainer = document.createElement("div");
            productContainer.style.display = "grid";
            productContainer.style.gridTemplateColumns =
                "repeat(auto-fit, minmax(220px, 1fr))";
            productContainer.style.gap = "16px";

            products.forEach(product => {
                const card = document.createElement("article");
                card.style.border = "1px solid #ccc";
                card.style.padding = "12px";

                const title = document.createElement("h3");
                title.textContent = product.title;

                const price = document.createElement("p");
                price.textContent = "$" + product.price;

                const image = document.createElement("img");
                image.src = product.image;
                image.alt = product.title;
                image.style.width = "100px";
                image.style.height = "100px";
                image.style.objectFit = "contain";

                card.append(title, price, image);
                productContainer.appendChild(card);
            });

            document.body.appendChild(productContainer);
        }
    } catch (error) {
        console.error("Failed to load products. Please try again.", error);
    }
}

loadProducts();
