
        // 📌 Detectar el desplazamiento de la página
        window.addEventListener("scroll", function() {
            let navbar = document.getElementById("barra-navegacion");
            let links = document.querySelectorAll("contenedor-nav a");
            
            if (window.scrollY > 50) { // 📌 Si se baja más de 50px
                navbar.classList.add("scrolled"); // 📌 Agrega la clase con el nuevo color
                links.forEach(link => link.classList.add("scrolled"));
            } else {
                navbar.classList.remove("scrolled"); // 📌 Vuelve al color original
                links.forEach(link => link.classList.remove("scrolled"));
            }
        });
 