/*
IMPORTANTE PARA ENTENDER COMO FUNCIONA

- getElementById("id del elemento") = toma el elemento html con el id que se llama entre ("")
- querySelector("nombre de clase") = similar a getElementById pero con un conjunto de elementos que llevan la misma clase
- classList.add("nombre de la clase") = agrega atributo ' class="" ' al elemento de donde se lo llame
- appendChild(elemento) = agrega un contenedor hijo a un contenedor padre
*/
async function tragosAlcoholicos() {
    try {
        // solicitud a la API para obtener tragos alcohólicos(la url de la api solo es de tragos con alcohol)
        const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic");
        const data = await response.json();

        // devuelve array con tragos
        const primerosCincoTragos = data.drinks.slice(0, data.drinks.length);

        // instanciar las imágenes, nombres y IDs de los tragos en el HTML
        const contenedorTragos = document.getElementById("contenedor-tragos");
        primerosCincoTragos.forEach(trago => {
            //crea un contenedor para cada trago individual con clase "imagenes" (un <div class="imagenes">)
            const tragoElemento = document.createElement("div");
            tragoElemento.classList.add("imagenes");

            //crea un contenedor para imagenes con sus atributos
            const imagen = document.createElement("img");
            imagen.src = trago.strDrinkThumb;
            imagen.alt = trago.strDrink;
            tragoElemento.appendChild(imagen);

            //crea un parrafo con el nombre del trago
            const nombre = document.createElement("p");
            nombre.textContent = trago.strDrink;
            tragoElemento.appendChild(nombre);

            //crea un parrafo con el id del trago (mostrar opcional)
            const id = document.createElement("p");
            id.textContent = `ID: ${trago.idDrink}`;
            id.className = "id-trago"
            tragoElemento.appendChild(id);

            // agrega el contenedor de cada trago individual al contenedor grande de tragos
            contenedorTragos.appendChild(tragoElemento);

            //  ----- mostrar datos en la consola ------
            // console.log("ID:", trago.idDrink);
            // console.log("Nombre:", trago.strDrink);
            // console.log("Imagen:", trago.strDrinkThumb);
            // console.log("------------------------");
        });

        // Obtener elementos del DOM (después de que se hayan agregado al DOM)
        const imagenes = document.querySelectorAll('.imagenes');
        const modal = document.getElementById("miModal");
        const btnCerrarModal = document.getElementById("cerrarModal");

        // Agregar controlador de eventos a cada imagen
        imagenes.forEach((imagen) => {
            imagen.addEventListener("click", function () {

                // Abrir el modal
                //console.log("SE HIZO CLICK EN UNA IMAGEN");
                modal.style.display = "block";

                //obtener el contenedor del trago que contiene tanto la imagen como el nombre
                const tragoContainer = imagen.closest('.imagenes');

                //obtener el elemento <p> que contiene el ID del trago dentro del contenedor del trago
                const idTrago = tragoContainer.querySelector('.id-trago');
                const idTra = idTrago.textContent;
                //obtener el elemento <p> que contiene el nombre del trago dentro del contenedor del trago
                const nombreTrago = tragoContainer.querySelector('p');

                // ------ mostrar el nombre del trago en la consola ------
                // console.log(nombreTrago.textContent);
                // console.log(idTrago.textContent);
                // console.log("****************************");

                //funcion para instanciar datos del trago dentro del modal
                detalleModal(idTra);
            });
        });

        // Controlador de eventos para cerrar el modal
        btnCerrarModal.addEventListener("click", function () {
            // borra el contenido del modal antes de cerrarlo
            const contenidoModal = document.getElementById("contenidoModal");
            contenidoModal.textContent = "";

            // cambia el estilo del modal (lo oculta) display:none;
            modal.style.display = "none";
        });
        

    } catch (error) {
        console.error("Error al obtener los tragos alcohólicos:", error);
    }
}
//llama la funcion que muestra los tragos en el html desde la API
tragosAlcoholicos();

//funcion para ejecutar la llamada a la API con la busqueda especifica del trago
async function detalleModal(idTra) {
    try {
        // destructura el {ID:valor} y se queda solo con el valor del Id del trago
        const idTragoNumero = idTra.split(':')[1].trim();

        console.log(idTragoNumero);

        //genera una url dinamica segun el id del trago seleccionado
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idTragoNumero}`;
        //console.log("URL de la API:", url);


        // consulta a la API de trago especifico
        const response = await fetch(url);
        const data = await response.json();

        if (data.drinks && data.drinks.length > 0) {
            // crea y trae la imagen del trago
            const imagen = document.createElement("img");
            imagen.src = data.drinks[0].strDrinkThumb;
            imagen.alt = "imagen de trago";
            imagen.className = "imagen-modal";

            // crea y trae el nombre del trago
            const nombre = document.createElement("p");
            const nombreTrago = data.drinks[0].strDrink;
            nombre.textContent = nombreTrago;

            // crea y trae la descripcion del trago
            const descripcion = document.createElement("p");
            const descripcionTrago = data.drinks[0].strInstructions;
            descripcion.textContent = descripcionTrago;

            // agrega ingredientes
            const ul = document.createElement("ul");
            for (let i = 1; i <= 15; i++) {
                const ingrediente = data.drinks[0][`strIngredient${i}`];
                if (ingrediente) {
                    const li = document.createElement("li");
                    li.textContent = ingrediente;
                    ul.appendChild(li);
                } else {
                    break;
                }
            }

                // agrega dentro del modal los datos de imagen, nombre y descrpcion como etiquetas <p> dentro del modal
                const contenidoModal = document.getElementById("contenidoModal");
                contenidoModal.appendChild(nombre);
                contenidoModal.appendChild(imagen);
                contenidoModal.appendChild(ul);
                contenidoModal.appendChild(descripcion);

            }
        } catch (error) {
            console.error("Error en contenido de datos del modal:", error);
        }
    }