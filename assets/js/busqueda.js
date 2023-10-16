
document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("inputModalSearch");
    const suggestionsContainer = document.getElementById("suggestions-container");

    // Lista simulada de productos
    const products = [
        { product_name: "Leggins Océano", product_link: "shop-single.html" },
        { product_name: "Leggins Merlot", product_link: "LegginsMerlot.html" },
        { product_name: "Leggins Preto", product_link: "LegginsPreto.html" },
        { product_name: "Leggins Gris Jaspe", product_link: "LegginsGris.html" },
        { product_name: "Biker Océano", product_link: "BikerOceano.html" },
        { product_name: "Biker Merlot", product_link: "BikerMerlot.html" },
        { product_name: "Biker Preto", product_link: "BikerPreto.html" },
        { product_name: "Top Océano", product_link: "TopOceano.html" },
        { product_name: "Top Merlot", product_link: "TopMerlot.html" },
        { product_name: "Top Preto", product_link: "TopPreto.html" },
        { product_name: "MidnigthVelvet", product_link: "MidnightVelvet.html" },
        { product_name: "SkyStep", product_link: "PSkyStep.html" },
        { product_name: "BlueHarmony", product_link: "BlueHarmony.html" },
    ];

    // Función para mostrar sugerencias
    function showSuggestions(suggestions) {
        suggestionsContainer.innerHTML = "";
        suggestions.forEach(function (suggestion) {
            const suggestionElement = document.createElement("div");
            suggestionElement.className = "suggestion";
            suggestionElement.textContent = suggestion.product_name;

            suggestionElement.addEventListener("click", function () {
                input.value = suggestion.product_name;
                window.location.href = suggestion.product_link;
            });

            suggestionsContainer.appendChild(suggestionElement);
        });
    }

    // Función para manejar la búsqueda y redirección al presionar Enter
    function handleSearchAndRedirect(event) {
        if (event.keyCode === 13) { // 13 es el código de tecla para Enter
            const query = input.value;
            const matchingProduct = products.find(function (product) {
                return product.product_name.toLowerCase() === query.toLowerCase();
            });

            if (matchingProduct) {
                window.location.href = matchingProduct.product_link;
            }
        }
    }

    // Manejar la entrada del usuario y mostrar sugerencias
    input.addEventListener("input", function () {
        const query = input.value;
        const suggestions = getFilteredSuggestions(query);
        showSuggestions(suggestions);
    });

    // Manejar la búsqueda y redirección al presionar Enter
    input.addEventListener("keydown", handleSearchAndRedirect);

    // Función para filtrar sugerencias basadas en la entrada del usuario
    function getFilteredSuggestions(query) {
        return products.filter(function (product) {
            return product.product_name.toLowerCase().includes(query.toLowerCase());
        });
    }
});