window.onload = function () {
    const session = sessionStorage.getItem('session'); // true o false
    console.log(`1 --- estado de la sesion = ${sessionStorage.getItem("session")}`);

    let esMayor = sessionStorage.getItem('esMayor'); // esto devuelve true o false
    console.log(`1 --- estado de esMayor = ${sessionStorage.getItem("esMayor")}`);

    venAlerta = document.querySelector(".alerta-edad-contenedor");
    venBloqueo = document.getElementById("bloqueo");
    const body = document.querySelector("body");

    body.style.overflow = "hidden";

    btnSi = document.getElementById("si");
    btnNo = document.getElementById("no");

    if (session !== null) {
        venAlerta.style.display = "none";
        venBloqueo.style.display = "none";
        body.style.removeProperty("overflow", true);
    } else {
        btnSi.addEventListener("click", function () {
            sessionStorage.setItem("session", true);
            console.log(`btn SI --- estado de la sesion ${sessionStorage.getItem("session")}`);
            esMayor = sessionStorage.setItem('esMayor', true);
            console.log("esMayor?? - " + sessionStorage.getItem("esMayor"));
            venAlerta.style.display = "none";
            venBloqueo.style.display = "none";
            body.style.removeProperty("overflow", true);
        });

        btnNo.addEventListener("click", function () {
            sessionStorage.setItem("session", true);
            console.log(`btn No --- estado de la sesion ${sessionStorage.getItem("session")}`);
            esMayor = sessionStorage.setItem('esMayor', false);
            console.log("esMayor?? - " + sessionStorage.getItem("esMayor"));
            venAlerta.style.display = "none";
            venBloqueo.style.display = "none";
            body.style.removeProperty("overflow", true);
        });
    };

    // if (session === null) {
    //     const resp = prompt(
    //         "eres mayor de edad? si / no"
    //     );
    //     if (resp === "si") {
    //         sessionStorage.setItem('session', true);
    //         sessionStorage.setItem('esMayor', true);

    //         alert("session iniciada y ... eres mayor de edad");
    //     } else {

    //         sessionStorage.setItem('session', true);
    //         sessionStorage.setItem('esMayor', false);

    //         alert(" session iniciada, peroooo .... eres menor de edad");
    //     };
    // } else {
    //     console.log("estado de la session : " + sessionStorage.getItem("session"));
    // };

    //window.addEventListener("beforeunload", function(event) {
    //    sessionStorage.clear();
    //});

};