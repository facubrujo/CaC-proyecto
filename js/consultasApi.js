async function tragosConAlcohol() {
    try {
        const respuesta = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic");
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.error("error al obtener 'tragos con alcohol'", error);
    }
}
async function tragosSinAlcohol() {
    try {
        const respuesta = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic");
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.error("error al obtener 'tragos sin alcohol'", error);
    }
}
async function tragosPorId(idTrago) {
    try {
        const respuesta = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idTrago}`);
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.error("error al obtener 'trago por ID'", error);
    }
}
async function tragosPorNombre(nombreTrago) {
    try {
        const respuesta = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nombreTrago}`);
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.error("error al obtener 'tragos por nombre'", error);
    }
}
async function tragosPorLetraAlfabeto(letra) {
    try {
        const respuesta = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letra}`);
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.error("error al obtener 'tragos por letra'", error);
    }
}

// ---- CREAR LISTA CON LETRAS PARA BUSQUEDA ----
const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const arr = alfabeto.split("");
const ul = document.getElementById("buscador-alfabetico");
//console.log("ARREGLO : "+arr);
arr.forEach((dato) => {
    //console.log(dato);
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.classList.add("letra")
    li.textContent = "/"
    a.textContent = dato;
    ul.appendChild(li);
    li.appendChild(a);
});

// ---- FUNCION MANEJA LA BUSQUEDA ALFABETICA - DEVUELVE LETRA ----
function devolverLetra() {
    const letras = document.querySelectorAll(".letra");
    letras.forEach((enlace) => {
        enlace.addEventListener("click", async function () {

            console.log("SI HIZO CLIC EN LA LETRA : " + enlace.textContent.toLocaleLowerCase());

            const datos = await tragosPorLetraAlfabeto(enlace.textContent.toLocaleLowerCase());
            // console.log("DATOS : " + datos)


            // const contenedor = document.getElementById("uno");
            // const contenedor2 = document.getElementById("resultsContainer");

            // contenedor.style.display = "block"
            // contenedor2.textContent = ""

            console.log("BUSCANDO TRAGOS CON LETRA " + enlace.textContent.toLocaleLowerCase())

            //limpiarContenedor();
            vistaElementosCuadricula(datos);

        });
    });
};

// function limpiarContenedor(){
//     const contenedor = document.getElementById("contenedor-tragos");
//     contenedor.innerHTML = "";
// }

function vistaElementosCuadricula(datos) {
    try {
        //console.log("DATOS DSDE LA FUNCION : " + datos);
        const contenedor = document.getElementById("contenedor-tragos");
        contenedor.innerHTML = "";
        //const data = datos.drinks;
        datos.drinks.forEach((trago) => {
            const div = document.createElement("div");
            div.classList.add("imagenes");

            const img = document.createElement("img");
            img.src = trago.strDrinkThumb;
            img.alt = trago.strDrink;
            div.appendChild(img);

            const p = document.createElement("p");
            p.textContent = trago.strDrink;
            div.appendChild(p);

            const id = document.createElement("p");
            id.textContent = trago.idDrink;
            id.className = "id-trago";
            id.hidden = true;
            div.appendChild(id);

            contenedor.appendChild(div);
        });
        imagenesClickeables();
    } catch (error) {
        console.log("error al instanciar elementos" + error)
        const contenedor = document.getElementById("contenedor-tragos");
        const mensaje = document.createElement("p");
        mensaje.textContent = "No se encontraron resultados";
        contenedor.appendChild(mensaje);
    }
};


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

        const imagen = document.createElement("img");
        imagen.src = trago.strDrinkThumb;
        imagen.alt = "imagen de trago";
        imagen.className = "imagen-modal";

        // nombre del trago
        const nombre = document.createElement("p");
        const nombreTrago = trago.strDrink;
        nombre.textContent = nombreTrago;

        // descripcion del trago
        const descripcion = document.createElement("p");
        const descripcionTrago = trago.strInstructions;
        descripcion.textContent = descripcionTrago;

        // ingredientes
        const ul = document.createElement("ul");
        for (let i = 1; i <= 15; i++) {
            const ingrediente = trago[`strIngredient${i}`];
            if (ingrediente) {
                const li = document.createElement("li");
                li.textContent = ingrediente;
                ul.appendChild(li);
            } else {
                break;
            }
        }

        contenidoModal.appendChild(nombre);
        contenidoModal.appendChild(imagen);
        contenidoModal.appendChild(ul);
        contenidoModal.appendChild(descripcion);

    } catch (error) {
        console.error("Error al obtener los detalles del trago:", error);
    }
}

// ---- FUNCION TODAS LAS BEBIDAS ALCOOHLICAS Y NO ALCOHOLICAS ----

async function todasLasBebidas() {
    try {
        const alcoholicas = await tragosConAlcohol();
        const noAlcoholicas = await tragosSinAlcohol();

        const alc = alcoholicas.drinks || [];
        const noAlc = noAlcoholicas.drinks || [];

        const todos = [...alc, ...noAlc]
        //console.log("TODAS LAS BEBIDAS : ", todos);
        //vistaElementosCuadricula(todos.drinks);
        // vistaElementosCuadricula(noAlcoholicas);

     //   console.log("DATOS DSDE LA FUNCION : " + todos);
        const contenedor = document.getElementById("contenedor-tragos");
        contenedor.innerHTML = "";
        todos.forEach((trago) => {
            const div = document.createElement("div");
            div.classList.add("imagenes");

            const img = document.createElement("img");
            img.src = trago.strDrinkThumb;
            img.alt = trago.strDrink;
            div.appendChild(img);

            const p = document.createElement("p");
            p.textContent = trago.strDrink;
            div.appendChild(p);

            const id = document.createElement("p");
            id.textContent = trago.idDrink;
            id.className = "id-trago";
            id.hidden = true;
            div.appendChild(id);

            contenedor.appendChild(div);
        });
        imagenesClickeables();
    } catch (error) {
        const contenedor = document.getElementById("contenedor-tragos");
        console.log("error al instanciar elementos" + error)
        const mensaje = document.createElement("p");
        mensaje.textContent = "No se encontraron resultados";
        contenedor.appendChild(mensaje);
    }
}




todasLasBebidas();
devolverLetra();