
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        
        document.getElementById("contenedor-nav").classList.add("blog-show");
        document.getElementById("blog-titulo-h2").classList.add("blog-show");
        document.getElementById("blog-titulo-p").classList.add("blog-show")
       
        
    }, 500); // Espera 500ms y luego aplica la clase "show" a varios elementos.  Con 500ms, los elementos aparecían medio segundo después de cargar la página
});
//transicion cuando baja la pagina

document.addEventListener("DOMContentLoaded", function () {
// Selecciona todos los elementos que deseas animar
let elementos = document.querySelectorAll("");

// Configura el Intersection Observer
let observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add("blog-show");
    }
});
}, { threshold: 0.0 });

// Observa cada elemento
elementos.forEach(el => observer.observe(el));
});