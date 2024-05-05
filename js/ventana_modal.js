async function tragosPorId(idTrago) {
    try {
        const respuesta = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idTrago}`);
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.error("error al obtener 'trago por ID'", error);
    }
}

// ---- FUNCION PARA HACER CLICK EN LAS IMAGENES ----
function imagenesClickeables() {
    const imagenes = document.querySelectorAll('.imagenes');
    imagenes.forEach((imagen) => {
        imagen.addEventListener("click", function () {
            const tragoContainer = imagen.closest('.imagenes');
            const idTrago = tragoContainer.querySelector('.id-trago').textContent;
            abrirModal(idTrago);
        });
    });
}


// ---- FUNCION PARA ABRIR EL MODAL Y MOSTAR LOS DATOS -----
function abrirModal(idTrago) {
    const modal = document.getElementById("miModal");
    modal.style.display = "block";
    contenidoModal(idTrago);
}

// ---- FUNCION PARA CERRAR EL MODAL ----
const btnCerrarModal = document.getElementById("cerrarModal");
btnCerrarModal.addEventListener("click", cerrarModal);
function cerrarModal() {
    const modal = document.getElementById("miModal");
    const contenidoModal = document.getElementById("contenidoModal");
    contenidoModal.textContent = "";
    modal.style.display = "none";
}

// ---- FUNCION CONTENIDO DEL MODAL ----
async function contenidoModal(idTrago) {
    try {
        const data = await tragosPorId(idTrago);
        const trago = data.drinks[0];

        const contenidoModal = document.getElementById("contenidoModal");

        const contImg = document.createElement("div");
        const contReceta = document.createElement("div");
        contReceta.className = "receta";

        const imagen = document.createElement("img");
        imagen.src = trago.strDrinkThumb;
        imagen.alt = "imagen de trago";
        imagen.className = "imagen-modal";
        contImg.appendChild(imagen);

        // nombre del trago
        const nombre = document.createElement("h3");
        const nombreTrago = trago.strDrink;
        nombre.textContent = nombreTrago;
        contReceta.appendChild(nombre);

        // descripcion del trago
        const descripcion = document.createElement("p");
        descripcion.className = "texto";
        const descripcionTrago = trago.strInstructions;
        descripcion.textContent = descripcionTrago;
        contReceta.appendChild(descripcion);

        // ingredientes
        const ul = document.createElement("ul");
        for (let i = 1; i <= 15; i++) {
            const ingrediente = trago[`strIngredient${i}`];
            const ingredienteNombre = trago[`strIngredient${i}`];
            const medida = trago[`strMeasure${i}`];
            if (ingrediente) {
                const li = document.createElement("li");
                const ingredienteImg = document.createElement("img");
                console.log(ingredienteNombre.toLocaleLowerCase());
                ingredienteImg.src = `https://www.thecocktaildb.com/images/ingredients/${ingredienteNombre.toLocaleLowerCase()}-Small.png`;// consulta api imagenes
                ingredienteImg.alt = "imagen de ingrediente";
                ingredienteImg.style.width = "60px";
                li.className = "texto";
                li.textContent = `${ingrediente} : ${medida}`;
                li.appendChild(ingredienteImg);
                ul.appendChild(li);
            } else {
                break;
            }
        }
        contReceta.appendChild(ul);


        contenidoModal.appendChild(contImg);
        contenidoModal.appendChild(contReceta);
        // contenidoModal.appendChild(nombre);
        // contenidoModal.appendChild(imagen);
        // contenidoModal.appendChild(ul);
        // contenidoModal.appendChild(descripcion);
        //traducir();
    } catch (error) {
        console.error("Error al obtener los detalles del trago:", error);
    }
}