// Get all buttons with the class "btn-danger"
const removeButtons = document.querySelectorAll(".btn-danger");

// Add a click event listener to each button
removeButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Remove the product from favorites when the button is clicked
        const product = button.closest(".product");
        product.remove(); // Remove the product element from the page
    });
});