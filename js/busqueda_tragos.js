document.getElementById("searchForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera tradicional

    const searchTerm = document.getElementById("searchInput").value;
    if (searchTerm.trim() !== "") {
        window.location.href = `pages/busqueda_tragos.html?s=${searchTerm}`;
    }
});

