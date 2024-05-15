document.addEventListener('DOMContentLoaded', function () {
    // busca en la sesion si hay un usuario logueado
    const usuario = JSON.parse(sessionStorage.getItem("usuarioOnline"));
    const usuarioDatos = document.getElementById("perfil-usuario");
    const ul = document.getElementById("ul");
    // muestra los datos del usuario a excepcion de la url de la imagen y la contraseña
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

    usuarioDatos.appendChild(ul);

    // muestra la imagen del usuario en el perfil
    const img = document.getElementById("img");
    img.src = usuario.imagen;
});
// cerrarSesionFunc();