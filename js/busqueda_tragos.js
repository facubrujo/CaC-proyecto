document.getElementById("formulario-busqueda").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera tradicional

    const searchTerm = document.getElementById("input-busqueda").value;
    const ruta = document.getElementById("url");
    // const url = ruta;
    // console.log(url);
    if (searchTerm.trim() !== "") {
        if (ruta !== null) {
            window.location.href = `pages/busqueda_tragos.html?s=${searchTerm}`;
        } else {
            window.location.href = `busqueda_tragos.html?s=${searchTerm}`;
        }
    }
});

