todosUsuarios = localStorage.getItem("usuarios");
console.log(todosUsuarios);

usu = JSON.parse(todosUsuarios);

// console.log(usu.nombre);
// console.log(usu.email);
// console.log(usu.password);
for (let i = 0; i < usu.length; i++) {
    // const element = array[index];
    console.log(usu[i]);
}

login = document.getElementById("login");
login.addEventListener("submit", function (event) {
    event.preventDefault();

    const loginMail = document.getElementById("email").value;
    const loginPassword = document.getElementById("pass").value;

    console.log("email desde login :" + loginMail);
    console.log("pass desde login :" + loginPassword);

    for (let i = 0; i < usu.length; i++) {
        if (usu[i].email === loginMail && usu[i].password === loginPassword) {
            console.log(" usuario email: " + usu[i].email);
            console.log(" usuario pass: " + usu[i].password);
            console.log("usuario loguenado : " + usu[i].nombre + " - " + usu[i].apellido);
            console.log("usuario atributo sesion antes : " + usu[i].sesion);
            usu[i].sesion = true;
            console.log("usuario atributo sesion despues : " + usu[i].sesion);
            
            const logueado = document.createElement("p");
            logueado.style.backgroundColor = "green";
            logueado.style.color = "White";
            logueado.textContent = "Logueado correctamente";
            login.appendChild(logueado);
            
            const guardarUsu = JSON.stringify(usu)
            localStorage.setItem("usuarios", guardarUsu);

            window.location.href = "perfil_usuario.html";
            
            break;
        } else {
            console.log("error, usuario no existe")
            const error = document.createElement("p");
            error.style.backgroundColor = "red";
            error.style.color = "White";
            error.textContent = "Email o contraseña incorrecta";
            login.appendChild(error);
            break;
        }
    }
});