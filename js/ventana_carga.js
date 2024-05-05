function mostrarCarga() {
    document.getElementById("ventana-carga").style.display = "flex";
    document.getElementById("contenido").style.display = "none";
    // alert("Esto es por que la ventana carga muy rapido y quiero ver si esta funcionando");
}

function ocultarCarga() {
    document.getElementById("ventana-carga").style.display = "none";
    document.getElementById("contenido").style.display = "block";
}

window.onload = function () {
    mostrarCarga();
};