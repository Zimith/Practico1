const enteraste = document.getElementById("enteraste");
const bloqueenteraste = document.getElementById("bloqueespefifique");

enteraste.addEventListener("change", function() {
    bloqueespecifique.classList.add("escondido");
    if (enteraste.value === "otro") {
        bloqueespecifique.classList.remove("escondido");
    }
});

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {
    alert("¡Gracias por enviar el formulario!");
    formulario.reset();
});