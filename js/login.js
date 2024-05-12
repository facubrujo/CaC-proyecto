const todosUsuarios = localStorage.getItem("usuarios");
console.log(todosUsuarios);

const usuList = JSON.parse(todosUsuarios);

console.log("usu.nombre"+ usuList);

const imgPerfil = document.getElementById("img-login");
document.getElementById('email').addEventListener('input', function (event) {
    const email = event.target.value;
    console.log("email que se ingreso en input : "+email);
    const emailIngresado = usuList.find(function(usuario){
        return usuario.email === email;
    });

    // for (let i = 0; i < usu.length; i++) {
    //     if(email === usu[i].email){
    //         console.log("el usuario encontrado es "+usu.email);
    //     }
    // }
    if(emailIngresado){

        imgPerfil.src = emailIngresado.imagen;
    }else{
        console.log("se setea imagen por defecto");
        imgPerfil.src = "../img/usuario_icono.png";
    }
});


login = document.getElementById("login");
login.addEventListener("submit", function (event) {
    event.preventDefault();

    const loginMail = document.getElementById("email").value;
    const loginPassword = document.getElementById("pass").value;

    console.log("email desde login :" + loginMail);
    console.log("pass desde login :" + loginPassword);

    const usuarioLogeando = usuList.find(function (usuario) {
        return usuario.email === loginMail;
    });

    console.log("Usuario logueando  : " + usuarioLogeando);
    if (usuarioLogeando) {
        if (usuarioLogeando.password === loginPassword) {
            console.log("nombre usuario : " + usuarioLogeando.nombre);
            console.log("email usuario : " + usuarioLogeando.email);
            console.log("estado de sesion de usuario : " + usuarioLogeando.sesion);
            usuarioLogeando.sesion = true;
            console.log();
            const logueado = document.getElementById("error");
            logueado.style.backgroundColor = "green";
            logueado.style.color = "White";
            logueado.textContent = "Logueado correctamente";
            login.appendChild(logueado);

            const guardarUsu = JSON.stringify(usuList)
            localStorage.setItem("usuarios", guardarUsu);

            sessionStorage.setItem("usuarioOnline", JSON.stringify(usuarioLogeando));// guarda el usuario que loguea

            // const navLogin = document.getElementById("login-nav");
            // const navNoLogin = document.getElementById("nav-nologin");
            // navLogin.style.display = "block";
            // navNoLogin.style.display = "none";


            // console.log("desde login.js usuario logueado : "+ usuarioLogeando);
            // alert("desde login.js usuario logueado : "+ usuarioLogeando.email);
            // sessionStorage.setItem('usuarioLogueado', ('usuarioLogueado',usuarioLogeando));

            window.location.href = "perfil_usuario.html";

        } else {
            console.log("la contraseña es incorrecta");
            console.log("error, usuario no existe")
            const error = document.getElementById("error");
            error.style.backgroundColor = "red";
            error.style.color = "White";
            error.innerHTML = "";
            error.textContent = "contraseña incorrecta";
            login.appendChild(error);

        }
    } else {
        console.log("usuario no registrado");
        console.log("error, usuario no existe")
        const error = document.getElementById("error");
        error.style.backgroundColor = "red";
        error.style.color = "White";
        error.innerHTML = "";
        error.textContent = "usuario no registrado o no existe";
        login.appendChild(error);

    }

    // for (let i = 0; i < usu.length; i++) {
    //     if (usu[i].email === loginMail && usu[i].password === loginPassword) {
    //         console.log(" usuario email: " + usu[i].email);
    //         console.log(" usuario pass: " + usu[i].password);
    //         console.log("usuario loguenado : " + usu[i].nombre + " - " + usu[i].apellido);
    //         console.log("usuario atributo sesion antes : " + usu[i].sesion);
    //         usu[i].sesion = true;
    //         console.log("usuario atributo sesion despues : " + usu[i].sesion);

    //         const logueado = document.getElementById("error");
    //         logueado.style.backgroundColor = "green";
    //         logueado.style.color = "White";
    //         logueado.textContent = "Logueado correctamente";
    //         login.appendChild(logueado);

    //         const guardarUsu = JSON.stringify(usu)
    //         localStorage.setItem("usuarios", guardarUsu);

    //         window.location.href = "perfil_usuario.html";

    //         break;
    //     } else {
    //         console.log("error, usuario no existe")
    //         const error = document.getElementById("error");
    //         error.style.backgroundColor = "red";
    //         error.style.color = "White";
    //         error.innerHTML = "";
    //         error.textContent = "Email o contraseña incorrecta";
    //         login.appendChild(error);
    //         break;
    //     }
    // }
});