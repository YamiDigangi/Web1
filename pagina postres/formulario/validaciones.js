function validarFormulario() {
    // Obtener referencias a los elementos del formulario
    const nombreInput = document.getElementById('nombre');
    const apellidoInput = document.getElementById('apellido');
    const correoInput = document.getElementById('correo');
    const contraseñaInput = document.getElementById('contraseña');

    // Obtener valores de los campos
    const nombre = nombreInput.value.trim();
    const apellido = apellidoInput.value.trim();
    const correo = correoInput.value.trim();
    const contraseña = contraseñaInput.value.trim();

    // Limpiar mensajes de error
    document.getElementById('errorNombre').innerText = '';
    document.getElementById('errorApellido').innerText = '';
    document.getElementById('errorCorreo').innerText = '';
    document.getElementById('errorContraseña').innerText = '';
    document.getElementById('mensajeExito').innerText = '';

    // Validar nombre
    if (nombre.length === 0) {
        document.getElementById('errorNombre').innerText = 'Este campo es obligatorio';
    }

    // Validar apellido
    if (apellido.length === 0) {
        document.getElementById('errorApellido').innerText = 'Este campo es obligatorio';
    }

    // Validar correo
    const correoRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegExp.test(correo)) {
        document.getElementById('errorCorreo').innerText = 'Ingrese un correo válido';
    }

    // Validar contraseña
    if (contraseña.length < 8) {
        document.getElementById('errorContraseña').innerText = 'La contraseña debe tener al menos 8 caracteres';
    }

    // Si no hay mensajes de error, mostrar mensaje de éxito
    if (
        document.getElementById('errorNombre').innerText === '' &&
        document.getElementById('errorApellido').innerText === '' &&
        document.getElementById('errorCorreo').innerText === '' &&
        document.getElementById('errorContraseña').innerText === ''
    ) {
        document.getElementById('mensajeExito').innerText = '¡Formulario enviado con éxito!';
    }
}

