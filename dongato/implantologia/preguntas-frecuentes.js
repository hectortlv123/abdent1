const faqItems = document.querySelectorAll('.contenedor-preguntas');

    faqItems.forEach(item => {
      item.addEventListener('click', () => {
        // Si ya está activo, se desactiva; si no, se activa
        item.classList.toggle('active');
      });
    });