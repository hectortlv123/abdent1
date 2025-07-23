//transicion cuando baja la pagina

document.addEventListener("DOMContentLoaded", function () {
// Selecciona todos los elementos que deseas animar
let elementos = document.querySelectorAll(".contenedor, .parrafo-imagen-lista, #beneficios2, .parrafo-imagen-lista2");

// Configura el Intersection Observer
let observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add("show");
    }
});
}, { threshold: 0.0 });

// Observa cada elemento
elementos.forEach(el => observer.observe(el));
});