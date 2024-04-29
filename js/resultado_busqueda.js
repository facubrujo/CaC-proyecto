document.addEventListener("DOMContentLoaded", function () {
    const url = new URLSearchParams(window.location.search);
    const busqueda = url.get('s');

    // console.log("url "+url);
    // console.log("busqueda "+busqueda);

    if (busqueda) {
        buscarTragos(busqueda);
    }
});

async function buscarTragos(busqueda) {
    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${busqueda}`);
        const data = await response.json();

        if (data.drinks) {
            const resultadosContenedor = document.getElementById("resultados-busqueda");

            data.drinks.forEach(trago => {
                const tragoContenedor = document.createElement("div");
                tragoContenedor.classList.add("trago");

                const imgContenedor = document.createElement("div");
                const imagen = document.createElement("img");
                imagen.src = trago.strDrinkThumb;
                imagen.alt = trago.strDrink;
                imgContenedor.appendChild(imagen);
                tragoContenedor.appendChild(imgContenedor);

                const txtContenedor = document.createElement("div");
                
                const nombre = document.createElement("h2");
                nombre.textContent = trago.strDrink;
                // imgContenedor.appendChild(nombre);
                txtContenedor.appendChild(nombre)
                tragoContenedor.appendChild(txtContenedor);

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
                txtContenedor.appendChild(ingredientes);
                tragoContenedor.appendChild(txtContenedor);

                const instrucciones = document.createElement("p");
                instrucciones.textContent = trago.strInstructions;

                txtContenedor.appendChild(instrucciones);
                tragoContenedor.appendChild(txtContenedor);

                resultadosContenedor.appendChild(tragoContenedor);
            });
        } else {
            const resultadosContenedor = document.getElementById("resultados-busqueda");
            resultadosContenedor.textContent = "No se encontraron resultados para la búsqueda.";
        }
    } catch (error) {
        console.error("Error al buscar tragos:", error);
    }
}