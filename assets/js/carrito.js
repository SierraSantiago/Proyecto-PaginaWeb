// cart.js

// Define an array to store cart items
let cartItems = [];

// Function to add a product to the cart
function addToCart(productName, price, size, quantity) {
    cartItems.push({ name: productName, price: price, size: size, quantity: quantity });
    updateCart();
}

// Function to remove a product from the cart
function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCart();
}

// Function to update the cart and display it
function updateCart() {
    const cartTable = document.querySelector("table tbody");
    const totalElement = document.getElementById("total-price");

    // Clear existing cart
    cartTable.innerHTML = "";

    // Calculate total price
    let totalPrice = 0;

    // Iterate through cart items
    cartItems.forEach((item, index) => {
        const row = cartTable.insertRow();
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price}</td>
            <td>${item.size}</td>
            <td>
            <button class="btn btn-secondary" onclick="decreaseQuantity(${index})">-</button>
            <span>${item.quantity}</span>
            <button class="btn btn-primary" onclick="increaseQuantity(${index})">+</button>
            </td>
            <td><button class="btn btn-danger" onclick="removeFromCart(${index})">Remove</button></td>
        `;
        totalPrice += parseFloat(item.price*item.quantity);
    });

    // Update the total price
    totalElement.textContent = totalPrice.toFixed(2);
}

// Function to handle the "Buy All" button
document.getElementById("buy-button").addEventListener("click", () => {
    // You can implement the logic to complete the purchase here
    // For example, you can send the cart data to a server.
    alert("Purchase successful!");
});

// Agrega las funciones para disminuir y aumentar la cantidad de un producto
function decreaseQuantity(index) {
    if (cartItems[index].quantity > 1) {
        cartItems[index].quantity--;
        updateCart();
    }
}

function increaseQuantity(index) {
    cartItems[index].quantity++;
    updateCart();
}

// Example: Adding products to the cart
addToCart("LegginsMerlot 1", 68.00, "S", 1);
addToCart("Ocean Leggins", 68.00, "M", 3);