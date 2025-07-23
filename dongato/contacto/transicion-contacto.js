 document.addEventListener("DOMContentLoaded", function () {
            setTimeout(() => {
                
                document.getElementById("contenedor-nav").classList.add("show");
                document.getElementById("titulo").classList.add("show");
                document.getElementById("parrafo").classList.add("show");
               
            }, 500); // Espera 500ms y luego aplica la clase "show" a varios elementos.  Con 500ms, los elementos aparecían medio segundo después de cargar la página
        });