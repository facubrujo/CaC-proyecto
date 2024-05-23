const toggle = document.querySelector('#toggle');
const themeActual = localStorage.getItem('theme');

if (themeActual) {
    document.documentElement.setAttribute('data-theme', themeActual);
}

if (themeActual === 'oscuro') {
    toggle.checked = true;
}

const cambiarTemaClaroOscuro = (event) => {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'oscuro');
        localStorage.setItem('theme', 'oscuro');
    } else {
        document.documentElement.setAttribute('data-theme', null);
        localStorage.setItem('theme', null);
    }
};

toggle.addEventListener('click', cambiarTemaClaroOscuro);

// Obtener el botón
let mybutton = document.getElementById("scrollBtn");

// Mostrar el botón cuando se desplaza 20px desde la parte superior
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// Cuando se hace clic en el botón, se desplaza hacia arriba de la página
function scrollToTop() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}