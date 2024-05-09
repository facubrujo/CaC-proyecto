const usuarios = localStorage.getItem("usuarios");
const usuarioDatos = document.getElementById("perfil-usuario");
const cerrarSesion = document.getElementById("cerrar-sesion");

console.log(usuarios);
const todosLosUsuarios = JSON.parse(usuarios);
console.log("Todos los usuarios : "+todosLosUsuarios);

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

console.log(usuario);
const ul = document.createElement("ul");
const nombre = document.createElement("li");
nombre.textContent = usuario.nombre;
const apellido = document.createElement("li");
apellido.textContent = usuario.apellido;
const email = document.createElement("li");
email.textContent = usuario.email;

ul.appendChild(nombre);
ul.appendChild(apellido);
ul.appendChild(email);

const img = document.createElement("img");
//img.src = usuario.imagen;

usuarioDatos.appendChild(img);
usuarioDatos.appendChild(ul);

cerrarSesion.addEventListener("click", ()=>{
    console.log("cerrar sesión");
    for (let i = 0; i < todosLosUsuarios.length; i++) {
        if(todosLosUsuarios[i].sesion === true){
            todosLosUsuarios[i].sesion = false;
            localStorage.setItem("usuarios", JSON.stringify(todosLosUsuarios));
            console.log("estado de sesion al cerrar : "+ todosLosUsuarios[i].sesion)
            window.location.href = "/index.html";
            break;
        }
        
    }

});


