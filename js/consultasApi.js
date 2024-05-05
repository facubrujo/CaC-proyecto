// async function tragosConAlcohol() {
//     try {
//         const respuesta = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic");
//         const datos = await respuesta.json();
//         return datos;
//     } catch (error) {
//         console.error("error al obtener 'tragos con alcohol'", error);
//     }
// }
// async function tragosSinAlcohol() {
//     try {
//         const respuesta = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic");
//         const datos = await respuesta.json();
//         return datos;
//     } catch (error) {
//         console.error("error al obtener 'tragos sin alcohol'", error);
//     }
// }
// async function tragosPorId(idTrago) {
//     try {
//         const respuesta = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idTrago}`);
//         const datos = await respuesta.json();
//         return datos;
//     } catch (error) {
//         console.error("error al obtener 'trago por ID'", error);
//     }
// }
// async function tragosPorNombre(nombreTrago) {
//     try {
//         const respuesta = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nombreTrago}`);
//         const datos = await respuesta.json();
//         return datos;
//     } catch (error) {
//         console.error("error al obtener 'tragos por nombre'", error);
//     }
// }
// async function tragosPorLetraAlfabeto(letra) {
//     try {
//         const respuesta = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letra}`);
//         const datos = await respuesta.json();
//         return datos;
//     } catch (error) {
//         console.error("error al obtener 'tragos por letra'", error);
//     }
// }
// async function imagenesIngredientes(ingredienteNombre) {
//     try {
//         const respuesta = await fetch(`https://www.thecocktaildb.com/images/ingredients/${ingredienteNombre}-Medium.png`);
//         const datos = await respuesta.json();
//         return datos;
//     } catch (error) {
//         console.error("error al obtener 'tragos por letra'", error);
//     }
// }

// // ---- CREAR LISTA CON LETRAS PARA BUSQUEDA ----
// const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const arr = alfabeto.split("");
// const ul = document.getElementById("buscador-alfabetico");
// //console.log("ARREGLO : "+arr);
// arr.forEach((dato) => {
//     //console.log(dato);
//     const li = document.createElement("li");
//     const a = document.createElement("a");
//     a.classList.add("letra")
//     li.textContent = "/"
//     a.textContent = dato;
//     ul.appendChild(li);
//     li.appendChild(a);
// });

// // ---- FUNCION MANEJA LA BUSQUEDA ALFABETICA - DEVUELVE LETRA ----
// function devolverLetra() {
//     const letras = document.querySelectorAll(".letra");
//     letras.forEach((enlace) => {
//         enlace.addEventListener("click", async function () {

//             console.log("SI HIZO CLIC EN LA LETRA : " + enlace.textContent.toLocaleLowerCase());

//             const datos = await tragosPorLetraAlfabeto(enlace.textContent.toLocaleLowerCase());
//             // console.log("DATOS : " + datos)


//             // const contenedor = document.getElementById("uno");
//             // const contenedor2 = document.getElementById("resultsContainer");

//             // contenedor.style.display = "block"
//             // contenedor2.textContent = ""

//             console.log("BUSCANDO TRAGOS CON LETRA " + enlace.textContent.toLocaleLowerCase())

//             //limpiarContenedor();
//             vistaElementosCuadricula(datos);

//         });
//     });
// };

// function limpiarContenedor(){
//     const contenedor = document.getElementById("contenedor-tragos");
//     contenedor.innerHTML = "";
// }

// function vistaElementosCuadricula(datos) {
//     try {
//         //console.log("DATOS DSDE LA FUNCION : " + datos);
//         const contenedor = document.getElementById("contenedor-tragos");
//         contenedor.innerHTML = "";
//         //const data = datos.drinks;
//         datos.drinks.forEach((trago) => {
//             const div = document.createElement("div");
//             div.classList.add("imagenes");

//             // const imgContenedor = document.createElement("div");
//             // const imgTarjeta = document.createElement("div");
//             // imgContenedor.style.backgroundImage = trago.strDrinkThumb;
//             // imgTarjeta.style.backgroundColor = "red";
//             const img = document.createElement("img");
//             img.src = trago.strDrinkThumb;
//             img.alt = trago.strDrink;
//             div.appendChild(img);
//             // imgContenedor.appendChild(imgTarjeta);
//             // div.appendChild(imgContenedor);

//             const p = document.createElement("p");
//             p.textContent = trago.strDrink;
//             div.appendChild(p);

//             const id = document.createElement("p");
//             id.textContent = trago.idDrink;
//             id.className = "id-trago";
//             id.hidden = true;
//             div.appendChild(id);

//             contenedor.appendChild(div);

//         });
//         imagenesClickeables();
//     } catch (error) {
//         console.log("error al instanciar elementos" + error)
//         const contenedor = document.getElementById("contenedor-tragos");
//         const mensaje = document.createElement("p");
//         mensaje.textContent = "No se encontraron resultados";
//         contenedor.appendChild(mensaje);
//     }
// };


// // ---- FUNCION PARA HACER CLICK EN LAS IMAGENES ----
// function imagenesClickeables() {
//     const imagenes = document.querySelectorAll('.imagenes');
//     imagenes.forEach((imagen) => {
//         imagen.addEventListener("click", function () {
//             const tragoContainer = imagen.closest('.imagenes');
//             const idTrago = tragoContainer.querySelector('.id-trago').textContent;
//             abrirModal(idTrago);
//         });
//     });
// }


// // ---- FUNCION PARA ABRIR EL MODAL Y MOSTAR LOS DATOS -----
// function abrirModal(idTrago) {
//     const modal = document.getElementById("miModal");
//     modal.style.display = "block";
//     contenidoModal(idTrago);
// }

// // ---- FUNCION PARA CERRAR EL MODAL ----
// const btnCerrarModal = document.getElementById("cerrarModal");
// btnCerrarModal.addEventListener("click", cerrarModal);
// function cerrarModal() {
//     const modal = document.getElementById("miModal");
//     const contenidoModal = document.getElementById("contenidoModal");
//     contenidoModal.textContent = "";
//     modal.style.display = "none";
// }

// // ---- FUNCION CONTENIDO DEL MODAL ----
// async function contenidoModal(idTrago) {
//     try {
//         const data = await tragosPorId(idTrago);
//         const trago = data.drinks[0];

//         const contenidoModal = document.getElementById("contenidoModal");

//         const contImg = document.createElement("div");
//         const contReceta = document.createElement("div");
//         contReceta.className = "receta";

//         const imagen = document.createElement("img");
//         imagen.src = trago.strDrinkThumb;
//         imagen.alt = "imagen de trago";
//         imagen.className = "imagen-modal";
//         contImg.appendChild(imagen);

//         // nombre del trago
//         const nombre = document.createElement("h3");
//         const nombreTrago = trago.strDrink;
//         nombre.textContent = nombreTrago;
//         contReceta.appendChild(nombre);

//         // descripcion del trago
//         const descripcion = document.createElement("p");
//         descripcion.className = "texto";
//         const descripcionTrago = trago.strInstructions;
//         descripcion.textContent = descripcionTrago;
//         contReceta.appendChild(descripcion);

//         // ingredientes
//         const ul = document.createElement("ul");
//         for (let i = 1; i <= 15; i++) {
//             const ingrediente = trago[`strIngredient${i}`];
//             const ingredienteNombre = trago[`strIngredient${i}`];
//             const medida = trago[`strMeasure${i}`];
//             if (ingrediente) {
//                 const li = document.createElement("li");
//                 const ingredienteImg = document.createElement("img");
//                 console.log(ingredienteNombre.toLocaleLowerCase());
//                 ingredienteImg.src = `https://www.thecocktaildb.com/images/ingredients/${ingredienteNombre.toLocaleLowerCase()}-Small.png`;// consulta api imagenes
//                 ingredienteImg.alt = "imagen de ingrediente";
//                 ingredienteImg.style.width = "60px";
//                 li.className = "texto";
//                 li.textContent = `${ingrediente} : ${medida}`;
//                 li.appendChild(ingredienteImg);
//                 ul.appendChild(li);
//             } else {
//                 break;
//             }
//         }
//         contReceta.appendChild(ul);


//         contenidoModal.appendChild(contImg);
//         contenidoModal.appendChild(contReceta);
//         // contenidoModal.appendChild(nombre);
//         // contenidoModal.appendChild(imagen);
//         // contenidoModal.appendChild(ul);
//         // contenidoModal.appendChild(descripcion);
//         //traducir();
//     } catch (error) {
//         console.error("Error al obtener los detalles del trago:", error);
//     }
// }

// // ---- FUNCION TODAS LAS BEBIDAS ALCOOHLICAS Y NO ALCOHOLICAS ----

// async function todasLasBebidas() {
//     try {
//         const alcoholicas = await tragosConAlcohol();
//         const noAlcoholicas = await tragosSinAlcohol();

//         const alc = alcoholicas.drinks || [];
//         const noAlc = noAlcoholicas.drinks || [];

//         const todos = [...alc, ...noAlc]
//         //console.log("TODAS LAS BEBIDAS : ", todos);
//         //vistaElementosCuadricula(todos.drinks);
//         // vistaElementosCuadricula(noAlcoholicas);

//         //   console.log("DATOS DSDE LA FUNCION : " + todos);
//         const contenedor = document.getElementById("contenedor-tragos");
//         contenedor.innerHTML = "";
//         todos.forEach((trago) => {
//             const div = document.createElement("div");
//             div.classList.add("imagenes");

//             // const img = document.createElement("img");
//             // img.src = trago.strDrinkThumb;
//             // img.alt = trago.strDrink;
//             // div.appendChild(img);
//             const imgContenedor = document.createElement("div");
//             imgContenedor.className = "imgFondo";

//             const imgTarjeta = document.createElement("div");
//             const calificacionForm = document.createElement("form");
//             calificacionForm.id = "form";
//             calificacionForm.className = "form";
//             for (let i = 0; i < 5; i++) {
//                 const btn = document.createElement("button");
//                 btn.className = "btn-calificacion";
//                 btn.textContent = `⭐${""}`;
//                 btn.style.background = "none";
//                 calificacionForm.appendChild(btn);
//             }


//             const tituloTarjeta = document.createElement("h3");
//             tituloTarjeta.textContent = trago.strDrink;
//             tituloTarjeta.style.textAlign = "center";
//             tituloTarjeta.style.color = "#fff";
//             imgTarjeta.className = "tarjeta-imagen";
//             console.log(trago.strDrinkThumb);
//             imgContenedor.style.backgroundImage = `url('${trago.strDrinkThumb}')`;
//             // imgContenedor.style.backgroundSize = "cover";
//             // imgContenedor.style.width = "20rem";
//             // imgContenedor.style.height = "20rem";
//             // imgTarjeta.style.backgroundColor = "red";
//             // imgTarjeta.style.width = "20rem";
//             // imgTarjeta.style.height = "20rem";
//             // const img = document.createElement("img");
//             // img.src = trago.strDrinkThumb;
//             // img.alt = trago.strDrink;
//             // div.appendChild(img);


//             imgTarjeta.appendChild(tituloTarjeta);
//             imgTarjeta.appendChild(calificacionForm);
//             imgContenedor.appendChild(imgTarjeta);
//             div.appendChild(imgContenedor);

//             const p = document.createElement("p");
//             p.style.maxWidth = "15rem";
//             p.textContent = trago.strDrink;
//             div.appendChild(p);

//             const id = document.createElement("p");
//             id.textContent = trago.idDrink;
//             id.className = "id-trago";
//             id.hidden = true;
//             div.appendChild(id);

//             contenedor.appendChild(div);
//         });
//         imagenesClickeables();
//     } catch (error) {
//         const contenedor = document.getElementById("contenedor-tragos");
//         console.log("error al instanciar elementos" + error)
//         const mensaje = document.createElement("p");
//         mensaje.textContent = "No se encontraron resultados";
//         contenedor.appendChild(mensaje);
//     }
// }

// ------ Funcion traducir de ingles a español ------

// function traducir() {
//     const textosEnIngles = document.querySelectorAll('.texto');

//     const idiomaOrigen = 'en';
//     const idiomaDestino = 'es';

//     textosEnIngles.forEach(texto => {
//         const textoEnIngles = texto.textContent;

//         const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${idiomaOrigen}&tl=${idiomaDestino}&dt=t&q=${encodeURIComponent(textoEnIngles)}`;

//         fetch(url)
//             .then(respuesta => respuesta.json())
//             .then(data => {
//                 const textoTraducido = data[0][0][0];
//                 texto.textContent = textoTraducido;
//             })
//             .catch(error => console.error('Error al traducir:', error));
//     });
// }

// --- metodo con JQuery para Ventana de carga ---
// window.onload = function () {
//     //alert("cargando pagina");
//     $('#cargar').fadeOut();
//     // $('#body').removeClass('hidden');
//     // $('#resultados-busqueda').removeClass('hidden');
//     $('#contenedor-imagenes').removeClass('hidden');
// };

// todasLasBebidas();
// devolverLetra();