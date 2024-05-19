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


// ---- FUNCION TODAS LAS BEBIDAS ALCOOHLICAS Y NO ALCOHOLICAS ----

async function todasLasBebidas() {
    try {
        esMayor = sessionStorage.getItem("esMayor");
        
        let todos;
        
        const alcoholicas = await tragosConAlcohol();
        const noAlcoholicas = await tragosSinAlcohol();
        if (esMayor === "true") {
            todos = alcoholicas.drinks.concat(noAlcoholicas.drinks);
            //console.log("TODAS LAS BEBIDAS : ", todos);
        }else{
            //console.log("valor de session storage esMayor  :  "+esMayor)
            todos = noAlcoholicas.drinks; // || {};
            //console.log("TODAS LAS BEBIDAS SIN ALCOHOL : ", todos);
        }

        //   console.log("DATOS DSDE LA FUNCION : " + todos);
        const contenedor = document.getElementById("contenedor-tragos");
        contenedor.innerHTML = "";
        todos.forEach((trago) => {
            const div = document.createElement("div");
            div.classList.add("imagenes");


            const imgContenedor = document.createElement("div");
            imgContenedor.className = "imgFondo";

            const imgTarjeta = document.createElement("div");
            const calificacionForm = document.createElement("form");
            calificacionForm.id = "form";
            calificacionForm.className = "form";
            for (let i = 0; i < 5; i++) {
                const btn = document.createElement("button");
                btn.className = "btn-calificacion";
                btn.textContent = `⭐${""}`;
                btn.style.background = "none";
                calificacionForm.appendChild(btn);
            }

            const tituloTarjeta = document.createElement("h3");
            tituloTarjeta.textContent = trago.strDrink;
            tituloTarjeta.style.textAlign = "center";
            tituloTarjeta.style.color = "#fff";
            imgTarjeta.className = "tarjeta-imagen";

            //console.log(trago.strDrinkThumb);

            imgContenedor.style.backgroundImage = `url('${trago.strDrinkThumb}')`;

            imgTarjeta.appendChild(tituloTarjeta);
            imgTarjeta.appendChild(calificacionForm);
            imgContenedor.appendChild(imgTarjeta);
            div.appendChild(imgContenedor);

            const p = document.createElement("p");
            p.style.maxWidth = "15rem";
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
        ocultarCarga()
    } catch (error) {
        ocultarCarga();
        const contenedor = document.getElementById("contenedor-tragos");
        console.log("error al instanciar elementos" + error)
        const mensaje = document.createElement("p");
        mensaje.textContent = "No se encontraron resultados";
        contenedor.appendChild(mensaje);
    }
}

// ---- llamada a los metodos ---- 

todasLasBebidas();