document.addEventListener('DOMContentLoaded', function () {
  // Accede al formulario
  const form = document.getElementById('registroForm');

  // Agrega un evento de escucha para el envío del formulario
  form.addEventListener('submit', function (event) {
      // Detiene el envío del formulario para manejar la validación manualmente
      event.preventDefault();

      // Valida el nombre
      const nombre = document.getElementById('nombre');
      if (nombre.value.trim() === '') {
          alert('Por favor, ingrese su nombre.');
          nombre.focus();
          return;
      }

      // Valida el correo electrónico
      const email = document.getElementById('email');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value)) {
          alert('Por favor, ingrese un correo electrónico válido.');
          email.focus();
          return;
      }

      // Si todas las validaciones pasan, puedes enviar el formulario aquí
      alert('¡Formulario enviado con éxito!');
  });
});
