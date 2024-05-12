const usuarios = localStorage.getItem("usuarios");
const usuarioDatos = document.getElementById("perfil-usuario");
const cerrarSesion = document.getElementById("cerrar-sesion");

//console.log(usuarios);
const todosLosUsuarios = JSON.parse(usuarios);
//console.log("Todos los usuarios : " + todosLosUsuarios);

let usuario = [];

for (let i = 0; i < todosLosUsuarios.length; i++) {

    if (todosLosUsuarios[i].sesion === true) {
        console.log(todosLosUsuarios[i].nombre)
        console.log(todosLosUsuarios[i].apellido)
        console.log(todosLosUsuarios[i].email)
        usuario = todosLosUsuarios[i];
        break;
    }
}

//console.log(usuario);
const ul = document.getElementById("ul");
for (let clave in usuario) {
    const li = document.createElement('li');
    if (clave === "imagen" || clave === "password") {
        // li.style.display = "none";
        li.setAttribute("hidden", true);
    } else {
        li.textContent = `${clave}: ${usuario[clave]}`;
        ul.appendChild(li);
    }
}

const img = document.getElementById("img");
img.src = usuario.imagen;

const imgPerfil = document.getElementById("img-perfil");
imgPerfil.src = usuario.imagen;

// usuarioDatos.appendChild(img);
usuarioDatos.appendChild(ul);

cerrarSesion.addEventListener("click", () => {
    console.log("cerrar sesión");
    for (let i = 0; i < todosLosUsuarios.length; i++) {
        if (todosLosUsuarios[i].sesion === true) {
            todosLosUsuarios[i].sesion = false;
            localStorage.setItem("usuarios", JSON.stringify(todosLosUsuarios));
            console.log("estado de sesion al cerrar : " + todosLosUsuarios[i].sesion)
            // window.location.href = "/index.html";
            window.location.href = "https://facubrujo.github.io/CaC-proyecto/index.html";
            break;
        }
    }
});

const btnLogin = document.getElementById("boton-login");
const imgLogin = document.getElementById("img-login");
btnLogin.classList.remove("d-flex");
btnLogin.style.display = "none";
imgLogin.style.display = "block";

