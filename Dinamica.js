// Obtén una referencia al enlace "Ver Receta"
var verRecetaEnlace = document.querySelectorAll('.receta a');

// Agrega un evento de clic a cada enlace
verRecetaEnlace.forEach(function(enlace) {
    enlace.addEventListener('click', function(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace

        // Obtén el contenedor de la receta
        var recetaContenedor = this.closest('.receta');

        // Simplemente cambia el color de fondo como ejemplo
        recetaContenedor.style.backgroundColor = '#f2f2f2';
    });
});
