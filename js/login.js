usuario = localStorage.getItem("usuario");
console.log(usuario);

usu = JSON.parse(usuario);

console.log(usu.nombre);
console.log(usu.email);
console.log(usu.password);

login = document.getElementById("login");
login.addEventListener("submit", function (event) {
    event.preventDefault();

    const mail = document.getElementById("email").value;
    const password = document.getElementById("pass").value;

    console.log("email :" + mail);
    console.log("pass :" + password);

    if (usu.email == mail && usu.password == password) {
        console.log(" usuario email: " + usu.email);
        console.log(" usuario pass: " + usu.password);
        console.log("usuario logueado")
        const logueado = document.createElement("p");
        logueado.style.backgroundColor = "green";
        logueado.style.color = "White";
        logueado.textContent = "Logueado correctamente";
        login.appendChild(logueado);
        window.location.href = "perfil_usuario.html";

    } else {
        console.log("error, usuario no existe")
        const error = document.createElement("p");
        error.style.backgroundColor = "red";
        error.style.color = "White";
        error.textContent = "Email o contraseña incorrecta";
        login.appendChild(error);
    }

});