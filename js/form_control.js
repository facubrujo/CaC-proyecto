/*
------ Este script maneja el control del formulario de registro --------

El sitio web debe incluir un formulario de contacto, con al menos 5
campos que incluya (un checkbox o radiobutton), un select y una
imagen, con validación realizada mediante JavaScript para que los
campos sean obligatorios.

*/

// ---- Control del input de NOMBRE  -----
const nombreError = document.getElementById('nombreError');
const nombreInput = document.getElementById('nombre');
nombreInput.addEventListener('input', function () {
    var nombre = this.value;

    if (!nombre) {
        nombreError.innerText = 'Campo obligatorio';
    } else {
        nombreError.innerText = 'ok';
    }
});

// ---- Control del input de APELLIDO  -----
const apellidoError = document.getElementById('apellidoError');
const apellido = document.getElementById('apellido');
apellido.addEventListener('input', function () {
    var apelli = this.value;
    if (!apelli) {
        apellidoError.innerText = 'Campo obligatorio';
    } else {
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
    var emailRegex = /\S+@\S+\.\S+/; // regex controla si el email lleva "@" y un "."
    if (!emailRegex.test(mail)) {
        emailError.innerText = 'Debe contener "@" y "." ';
    } else {
        emailError.innerText = 'ok';
    }
});

// ---- Control del input de CONTRASEÑA ----
const passwordError = document.getElementById('passwordError');
const password = document.getElementById('password');
// esta funcion controla que la contraseña tenga al menos 8 caracteres y una MAYUSCULA como campo obligatorio
password.addEventListener('input', function () {
    var pass = this.value;
    if (pass.length < 8 || !/[A-Z]/.test(pass)) { // regex controla que sean mas de 8 caracteres y al menos 1 mayuscula
        passwordError.innerText = 'La contraseña debe tener al menos 8 caracteres, incluyendo al menos 1 mayúscula.';
    } else {
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
        password2Error.innerText = 'ok';
    }
});