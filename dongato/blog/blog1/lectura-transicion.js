
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        
        document.getElementById("contenedor-nav").classList.add("blog-show");
        document.getElementById("contenedor-blog1").classList.add("blog-show");
        document.getElementById("contenedor-blog").classList.add("blog-show")
       
        
    }, 500); // Espera 500ms y luego aplica la clase "show" a varios elementos.  Con 500ms, los elementos aparecían medio segundo después de cargar la página
});