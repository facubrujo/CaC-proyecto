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

            const esMayor = sessionStorage.getItem("esMayor");

            data.drinks.forEach(trago => {
                const tragoContenedor = document.createElement("div");
                tragoContenedor.classList.add("trago");
                if (esMayor === "false" && trago.strAlcoholic === "Alcoholic"){
                    tragoContenedor.style.display = "none";
                    const tex = document.createElement("p");
                    tex.textContent = `Lo sentimos, esta bebida "${trago.strDrink}" es para mayores de edad"`;
                    resultadosContenedor.appendChild(tex);
                    
                }

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
                        ingredienteItem.className = "texto";
                        ingredienteItem.textContent = `${ingrediente}: ${medida}`;
                        ingredientes.appendChild(ingredienteItem);
                    } else {
                        break;
                    }
                }
                txtContenedor.appendChild(ingredientes);
                tragoContenedor.appendChild(txtContenedor);

                const instrucciones = document.createElement("p");
                instrucciones.className = "texto";
                instrucciones.textContent = trago.strInstructions;

                txtContenedor.appendChild(instrucciones);
                tragoContenedor.appendChild(txtContenedor);

                resultadosContenedor.appendChild(tragoContenedor);
                //traducir();

                ocultarCarga();
            });
        } else {
            ocultarCarga();
            const resultadosContenedor = document.getElementById("resultados-busqueda");
            resultadosContenedor.textContent = "No se encontraron resultados para la búsqueda.";
        }
    } catch (error) {

        console.error("Error al buscar tragos:", error);
    }
}

document.getElementById("formulario-busqueda").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera tradicional

    const searchTerm = document.getElementById("input-busqueda").value;
    const ruta = document.getElementById("url");
    // const url = ruta;
    // console.log(url);
    if (searchTerm.trim() !== "") {
        if (ruta !== null) {
            window.location.href = `pages/busqueda_tragos.html?s=${searchTerm}`;
        } else {
            window.location.href = `busqueda_tragos.html?s=${searchTerm}`;
        }
    }
});


// function traducir() {
//     // Texto en inglés
//     const textosEnIngles = document.querySelectorAll('.texto');

//     // Idioma origen: inglés ('en') y destino: español ('es')
//     const idiomaOrigen = 'en';
//     const idiomaDestino = 'es';

//     textosEnIngles.forEach(texto => {
//         // Texto en inglés
//         const textoEnIngles = texto.textContent;

//         // URL de la API de Google Translate
//         const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${idiomaOrigen}&tl=${idiomaDestino}&dt=t&q=${encodeURIComponent(textoEnIngles)}`;

//         fetch(url)
//             .then(response => response.json())
//             .then(data => {
//                 const textoTraducido = data[0][0][0];
//                 texto.textContent = textoTraducido;
//             })
//             .catch(error => console.error('Error al traducir:', error));
//     });
// }
