function enviarWhatsApp() {
    let nombre = document.getElementById("nombre").value.trim();
    let celular = document.getElementById("celular").value.trim();
    let servicio = document.getElementById("servicio").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();
    let lugar = document.getElementById("lugar").value.trim();

    if (nombre === "" || celular === "" || servicio === "" || lugar === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    let texto = `
Hola, mi nombre es ${nombre}.
Mi número de celular es ${celular}.
Estoy interesado(a) en el servicio de ${servicio}.
Me encuentro en ${lugar}.
${mensaje}
    `;

    let numeroWhatsApp = "51996163307"; 

    let url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
}