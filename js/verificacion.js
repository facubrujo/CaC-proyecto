const usuOnline = sessionStorage.getItem('usuarioOnline');


//todosUsuarios = localStorage.getItem("usuarios");
// console.log(usuario);

const usu = JSON.parse(usuOnline);

//console.log(usu)
// let usu = JSON.parse(usuario)
console.log(usu)
const botonLogin = document.getElementById("boton-login")
const contenedorLogin = document.getElementById("contenedor-img-login")
const imagenLogin = document.getElementById("img-perfil")
if(usuOnline !== null){
    console.log("Usuario en linea : " + usu.nombre)
    console.log(usu.email)
    botonLogin.style.display = "none";
    contenedorLogin.style.display = "flex";
    imagenLogin.src = usu.imagen;
    

}else{
    console.log("ningun usuario en linea");
}

