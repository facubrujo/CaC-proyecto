function vistaElementosCuadricula(datos) {
    try {
        // mostrarCarga();
        // console.log("mostrando ventana carga");
        //console.log("DATOS DSDE LA FUNCION : " + datos);
        const contenedor = document.getElementById("contenedor-tragos");
        contenedor.innerHTML = "";
        //const data = datos.drinks;
        datos.drinks.forEach((trago) => {
            const div = document.createElement("div");
            div.classList.add("imagenes");

            // const imgContenedor = document.createElement("div");
            // const imgTarjeta = document.createElement("div");
            // imgContenedor.style.backgroundImage = trago.strDrinkThumb;
            // imgTarjeta.style.backgroundColor = "red";
            const img = document.createElement("img");
            img.src = trago.strDrinkThumb;
            img.alt = trago.strDrink;
            div.appendChild(img);
            // imgContenedor.appendChild(imgTarjeta);
            // div.appendChild(imgContenedor);

            const p = document.createElement("p");
            p.textContent = trago.strDrink;
            p.style.width = "15rem";
            div.appendChild(p);

            const id = document.createElement("p");
            id.textContent = trago.idDrink;
            id.className = "id-trago";
            id.hidden = true;
            div.appendChild(id);

            contenedor.appendChild(div);

        });
        imagenesClickeables();
        document.onload = ocultarCarga();
        // ocultarCarga()
        console.log("listo- todo cargado");
    } catch (error) {
        console.log("error al instanciar elementos" + error)
        const contenedor = document.getElementById("contenedor-tragos");
        const mensaje = document.createElement("p");
        mensaje.textContent = "No se encontraron resultados";
        contenedor.appendChild(mensaje);
        // ocultarCarga();
    }
};

function traducir() {
    const textosEnIngles = document.querySelectorAll('.texto');

    const idiomaOrigen = 'en';
    const idiomaDestino = 'es';

    textosEnIngles.forEach(texto => {
        const textoEnIngles = texto.textContent;

        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${idiomaOrigen}&tl=${idiomaDestino}&dt=t&q=${encodeURIComponent(textoEnIngles)}`;

        fetch(url)
            .then(respuesta => respuesta.json())
            .then(data => {
                const textoTraducido = data[0][0][0];
                texto.textContent = textoTraducido;
            })
            .catch(error => console.error('Error al traducir:', error));
    });
}