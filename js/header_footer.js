/*
IMPORTANTE PARA ENTENDER COMO FUNCIONA

- getElementById("id del elemento") = toma el elemento html con el id que se llama entre ("")
- classList.add("nombre de la clase") = agrega atributo ' class="" ' al elemento de donde se lo llame
- appendChild(elemento) = agrega un contenedor hijo a un contenedor padre

*/

// funcion para instanciar un header dinamico
function headerDinamico() {
    const header = document.getElementById("header");// toma el elemento con ID=header
    header.classList.add('header');// agrega al elemento header la clase de nombre "header"

    const div = document.createElement('div');// crea un elemento <div>
    const h1 = document.createElement('h1');// crea un elemento <h1>
    h1.textContent = 'PAGINA DE TRAGOS';// agrega texto a elemento <h1>
    div.appendChild(h1);// pone el <h1> dentro del <div>
    header.appendChild(div);// pone el <div> dentro del <header>

    const contenedorNav = document.createElement('div');//crea elemento <div>
    contenedorNav.classList.add('contenedor-nav');//agrega una clase al div (<div class="contenedor-nav">)

    const imagenHeader = document.createElement('div');//crea elemento <div>
    imagenHeader.classList.add('imagen-header');//agrega clase a <div class="imagen-header">
    const imagenLink = document.createElement('a');// crea elemento link <a>
    imagenLink.href = '/';// agrega atributo href="/" al <a>
    const imagen = document.createElement('img');//crea elemento imagen <img>
    imagen.src = 'img/cocktail_icono.png';//agrega atributo src="ruta de la imagen" al elemento <img>
    imagen.alt = '';// agrega atributo alt="" al elemento <img>
    imagenLink.appendChild(imagen);// agrega elemento img dentro del enlace <a><img><a/>
    imagenHeader.appendChild(imagenLink);// agrega elemento <a> dentro del <div>
    contenedorNav.appendChild(imagenHeader);// agrega div que contiene link + img dentro del header

    const navItems = document.createElement('div');// crea elemento div
    navItems.classList.add('nav-items');// agrega clase a ese div class="nav-items"
    const links = [ // arreglo de objetos con nombre y rutas del nav
        { text: 'Home', href: '/' }, 
        { text: 'Todos los tragos', href: '/pages/todos_los_tragos.html' },
        { text: 'Alcohol', href: '/alcohol' },
        { text: 'No-Alcohol', href: '/no-alcohol' },
        { text: 'Contacto', href: '/contacto' },
        { text: 'Registro', href: '../pages/registro.html' }
    ];
    links.forEach(link => {//bucle que itera el arreglo de objetos
        const div = document.createElement('div');// crea un div
        const a = document.createElement('a');// crea un enlace
        a.href = link.href;// agrega atributo href a enlace
        a.textContent = link.text; // agrega texto a enlace
        div.appendChild(a);// agrega enlace dentro de div(para separar)
        navItems.appendChild(div);// agrega div con enlace dentro del contenedor de enlaces
    });

    contenedorNav.appendChild(navItems);// contenedor que contiene los enlaces se agrega

    header.appendChild(contenedorNav);// se agrega todo dentro del header
}

// funcion para instanciar un footer dinamico
function footerDinamico(){
    const footer = document.getElementById("footer");
    footer.classList.add("footer");
    const div = document.createElement("div");
    div.classList.add("imagen-footer")
    const imagenLink = document.createElement('a');
    imagenLink.href = '/';
    const imagen = document.createElement('img');
    imagen.src = 'img/cocktail_icono.png';
    imagen.alt = '';
    imagenLink.appendChild(imagen);
    div.appendChild(imagenLink);

    footer.appendChild(div);

    const div2 = document.createElement("div");
    div2.classList.add("footer-texto");
    const p = document.createElement("p");
    p.textContent = "Todos los derechos reservados";
    div2.appendChild(p);
    footer.appendChild(div2);
}

// llamada a funciones que instancian el header y el footer
headerDinamico();
footerDinamico();
