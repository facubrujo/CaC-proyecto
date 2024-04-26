document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('s');

    if (searchTerm) {
        buscarTragos(searchTerm);
    }
});

async function buscarTragos(searchTerm) {
    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);
        const data = await response.json();

        if (data.drinks) {
            const resultsContainer = document.getElementById("resultsContainer");

            data.drinks.forEach(trago => {
                const tragoElemento = document.createElement("div");
                tragoElemento.classList.add("trago");

                const imagen = document.createElement("img");
                imagen.src = trago.strDrinkThumb;
                imagen.alt = trago.strDrink;
                tragoElemento.appendChild(imagen);

                const nombre = document.createElement("h2");
                nombre.textContent = trago.strDrink;
                tragoElemento.appendChild(nombre);

                const ingredientes = document.createElement("ul");
                for (let i = 1; i <= 15; i++) {
                    const ingrediente = trago[`strIngredient${i}`];
                    const medida = trago[`strMeasure${i}`];
                    if (ingrediente) {
                        const ingredienteItem = document.createElement("li");
                        ingredienteItem.textContent = `${ingrediente}: ${medida}`;
                        ingredientes.appendChild(ingredienteItem);
                    } else {
                        break;
                    }
                }
                tragoElemento.appendChild(ingredientes);

                const instrucciones = document.createElement("p");
                instrucciones.textContent = trago.strInstructions;
                tragoElemento.appendChild(instrucciones);

                resultsContainer.appendChild(tragoElemento);
            });
        } else {
            const resultsContainer = document.getElementById("resultsContainer");
            resultsContainer.textContent = "No se encontraron resultados para la búsqueda.";
        }
    } catch (error) {
        console.error("Error al buscar tragos:", error);
    }
}