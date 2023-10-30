// cart.js



// Function to remove a product from the cart
function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCart();
}




// Function to handle the "Buy All" button
document.getElementById("buy-button").addEventListener("click", () => {
    // You can implement the logic to complete the purchase here
    // For example, you can send the cart data to a server.
    window.location.href= "comprar"
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