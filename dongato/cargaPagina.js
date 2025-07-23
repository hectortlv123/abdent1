// Mostrar el preloader al cargar la página
window.onload = function () {
    setTimeout(() => {
        document.getElementById("preloader").classList.add("hidden");
    }, 500);
};

// Mostrar el preloader al cambiar de página
document.querySelectorAll(".link").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        let target = this.href;
        document.getElementById("preloader").classList.remove("hidden");

        setTimeout(() => {
            window.location.href = target;
        }, 500);
    });
});