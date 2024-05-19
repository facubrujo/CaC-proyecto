/*
------ Este script maneja el control del formulario de registro --------

El sitio web debe incluir un formulario de contacto, con al menos 5
campos que incluya (un checkbox o radiobutton), un select y una
imagen, con validación realizada mediante JavaScript para que los
campos sean obligatorios.

*/

var submitControl = {
    nombre: false,
    apellido: false,
    email: false,
    password: false,
    passrord2: false,
    mayorEdad: false,
    genero: false
};

var submitControl = false;

// ---- Control del input de NOMBRE  -----
const nombreError = document.getElementById('nombreError');
const nombreInput = document.getElementById('nombre');
nombreInput.addEventListener('input', function () {
    var nombre = this.value;
    const nombreCtrl = /^[a-zA-Z]+$/;

    if (!nombre) {
        nombreError.innerText = 'Campo obligatorio';
    } else {
        submitControl = true;
        nombreError.innerText = 'ok';
    }
});

// ---- Control del input de APELLIDO  -----
const apellidoError = document.getElementById('apellidoError');
const apellido = document.getElementById('apellido');
apellido.addEventListener('input', function () {
    var apelli = this.value;
    const apellidoCtrl = /^[a-zA-Z]+$/;
    if (!apelli) {
        apellidoError.innerText = 'Campo obligatorio';
    } else {
        submitControl.apellido = true;
        apellidoError.innerText = 'ok';
    }
});

// ---- Control del input de EMAIL ----
const emailError = document.getElementById('emailError');
const email = document.getElementById('email');
// esta funcion chekea el valor ingresado en el input y compara por un REGEX (expresion regular)
// controla que el email contenga "@" y  un "." como campos obligatorios
email.addEventListener('input', function () {
    var mail = this.value;
    const emailCtrl = /\S+@\S+\.\S+/; // regex controla si el email lleva "@" y un "."
    if (!emailRegex.test(mail)) {
        emailError.innerText = 'Debe contener "@" y "." ';
    } else {
        submitControl.email = true;
        emailError.innerText = 'ok';
    }
});

// ---- Control del input de CONTRASEÑA ----
const passwordError = document.getElementById('passwordError');
const password = document.getElementById('password');
// esta funcion controla que la contraseña tenga al menos 8 caracteres y una MAYUSCULA como campo obligatorio
password.addEventListener('input', function () {
    var pass = this.value;
    const contraseñaCtrl = "";
    if (pass.length < 8 || !/[A-Z]/.test(pass)) { // regex controla que sean mas de 8 caracteres y al menos 1 mayuscula
        passwordError.innerText = 'La contraseña debe tener al menos 8 caracteres, incluyendo al menos 1 mayúscula.';
    } else {
        submitControl.password = true;
        passwordError.innerText = 'ok';
    }
});

// ---- Control del input de CONTRASEÑA 2 ----
const password2Error = document.getElementById('password2Error');
const password2 = document.getElementById('password2');

// esta funcion compara la CONTRASEÑA 1 y la CONTRASEÑA 2 para que sean iguales
// si las contraseñas no coinciden da un mensaje de "las contraseñas no coinciden" 
password2.addEventListener('input', function () {
    var pass2 = this.value;
    var pass = password.value.toString();

    if (pass !== pass2) {
        password2Error.innerText = 'Las contraseñas no coinciden.';
    } else {
        submitControl.passrord2 = true;
        password2Error.innerText = 'ok';
    }
});

const seleccionado = document.querySelector('input[type="radio"]:checked');
if (seleccionado) {
    submitControl.genero = true;
} 


// -- mostrar imagen que se carga en formulario
let imagenUrl = "";
document.querySelector('#archivo').addEventListener('change', function (event) {
    const imagenInput = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        imagenUrl = e.target.result;
        const imagenMuestra = document.getElementById('imagen-muestra');
        imagenMuestra.src = e.target.result;
        document.getElementById('contenedor-de-imagen').style.display = 'block';
        console.log(e.target.result);
    }
    reader.readAsDataURL(imagenInput);
});

// document.getElementById(formulario).addEventListener('submit', function(event){
//     event.preventDefault();

//     for (let clave in submitControl){
//         if(!submitControl[clave]){

//         }
//     }
// });


// ----- prueba crear objeto usuario con datos de formulario ------

//console.log("buscar si existe array en storage : " + localStorage.getItem("usuarios"));
document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");
    const btnSubmit = document.getElementById("submit");
    const alerta = document.getElementById("carga-correcta");

    alerta.style.display = "none";
    //btnSubmit.disabled = true;

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const email = document.getElementById("email").value;
        const mayorEdad = document.getElementById("mayor-edad").value;
        const password = document.getElementById("password").value;
        const password2 = document.getElementById("password2").value;
        const genero = document.querySelector('input[name="gender"]:checked').value;
        const imagen = document.getElementById("archivo").files[0];

        const sesion = false;

        const reader = new FileReader();



        // const img = reader.readAsDataURL(reader.result);// onload = function (e) {
        //     // const imagenPreview = document.getElementById('imagenPreview');
        //     // imagenPreview.src = e.target.result;
        //     // document.getElementById('imagenPreviewContainer').style.display = 'block';
        // //     return e.target.result;
        // // }
        // console.log("reader es : "+ img)

        // for(let i in submitControl){
        //     if(!submitControl[i]){
        //         const error = document.getElementById("error");
        //         error.textContent = "Por favor, rellene todos los campos del formulario";
        //         break;
        //     }else{
        //         //btnSubmit.disabled = fasle;

        //     }
        // }

        console.log("creando objeto usuario con datos del form");
        const usuario = {
            nombre: nombre,
            apellido: apellido,
            email: email,
            password: password,
            mayorEdad: mayorEdad,
            genero: genero,
            imagen: imagenUrl,
            sesion: sesion
        };
        console.log("nuevo objeto usuario creado : " + usuario);

        if (localStorage.getItem("usuarios") === null) {
            console.log("Array usuarios no existe, creando array");
            const usuarios = [];

            console.log("agregando usuario nuevo a la lista/array");
            usuarios.push(usuario);
            console.log("Array de objetos usuario : " + usuarios);

            const guardarUsu = JSON.stringify(usuarios)
            localStorage.setItem("usuarios", guardarUsu);
        } else {
            console.log("Array de objetos existe, buscando en Storage");
            const usuarios = JSON.parse(localStorage.getItem("usuarios"));
            console.log("Array recuperado, usuarios : " + usuarios);
            console.log("agregando nuevo usuario a la lista");
            usuarios.push(usuario);
            console.log("usuario agregado : " + usuarios);

            const guardarUsu = JSON.stringify(usuarios)
            localStorage.setItem("usuarios", guardarUsu);
        }




        formulario.style.display = "none";
        const usuNombre = document.getElementById("usuario-nombre");
        usuNombre.innerHTML = `"${usuario.nombre}", `;
        alerta.style.display = "block";
        alerta.style.backgroundColor = "green";


    });
});

// --- Alerta cuenta creada correctamente --- //
// function cuentaCreadaCorrectamente() {
//     formulario.style.display = "none";
//     const usuNombre = document.getElementById("usuario-nombre");
//     usuNombre.innerHTML = `"${usuario.nombre}", `;
//     alerta.style.display = "block";
//     alerta.style.backgroundColor = "green";
// }

/*

para crear muchos usuarios habria que usar un Array de objetos usuarios

const usuarios = [

    usuario[i]{   // usuario0
        nombre: nombre,
        apellido: apellido,
        email: email,
        password: password,
        mayorEdad: mayorEdad,
        genero: genero,
        imagen: imagen,
        sesion: sesion
    },
    usuario[i]{   // usuario1
        nombre: nombre,
        apellido: apellido,
        email: email,
        password: password,
        mayorEdad: mayorEdad,
        genero: genero,
        imagen: imagen,
        sesion: sesion
    }

];

*/