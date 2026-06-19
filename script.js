// 1. Database of products
const products = [
    { id: 1, name: "Wireless Headphones", price: 89.99, image: "images/headphones.jpg" },
    { id: 2, name: "Smart Watch", price: 199.99, image: "images/watch.jpg" },
    { id: 3, name: "Mechanical Keyboard", price: 129.99, image: "images/keyboard.jpg" },
    { id: 4, name: "Gaming Mouse", price: 59.99, image: "images/mouse.jpg" },

    { id: 5, name: "Minimalist Backpack", price: 75.00, image: "images/backpack.jpg" },

    { id: 6, name: "Desk Lamp", price: 34.99, image: "images/lamp.jpg" }

];

// 2. Variable to hold just the total item count
let totalCartCount = 0;

// 3. Loop through products and display them on the screen
function displayProducts() {
    const container = document.getElementById('product-container');
    container.innerHTML = ""; // Clear the grid

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 6px;">
            </div>
            <h3 class="product-title">${product.name}</h3>
            <p class="product-price">$${product.price}</p>
            <button class="add-to-cart-btn" onclick="addToCart()">Add to Cart</button>
        `;
        container.appendChild(card);
    });
}

// 4. Simple function to increase the number and update the HTML
function addToCart() {
    totalCartCount++; // Add 1 to the count
    document.getElementById('cart-count').innerText = totalCartCount; // Update badge
}

// Run the function when page loads
displayProducts();