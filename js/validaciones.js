function validarFormulario() {
    const nombreInput = document.getElementById('nombre');
    const apellidoInput = document.getElementById('apellido');
    const correoInput = document.getElementById('correo');
    const mensajeInput = document.getElementById('mensaje');
    const tipoConsultaInput = document.getElementById('tipoConsulta');

    limpiarMensajes();

    validarCampo(nombreInput, 'errorNombre', 'Nombre es obligatorio');
    validarCampo(apellidoInput, 'errorApellido', 'Apellido es obligatorio');
    validarCampo(correoInput, 'errorCorreo', 'Correo electrónico no válido', /^\S+@\S+\.\S+$/);
    validarCampo(mensajeInput, 'errorMensaje', 'Mensaje es obligatorio');
    validarCampo(tipoConsultaInput, 'errorTipoConsulta', 'Tipo de Consulta es obligatorio');

    // Si no hay mensajes de error, mostrar mensaje de éxito
    if (document.querySelectorAll('.falla').length === 0) {
        document.getElementById('mensajeExito').innerText = '¡Formulario enviado con éxito!';
    }
}

function validarCampo(input, idError, mensajeError, regex) {
    const valor = input.value.trim();
    const formControl = input.parentElement;
    const aviso = formControl.querySelector(`#${idError}`);

    if (!valor && !regex) {
        mostrarError(formControl, aviso, mensajeError);
    } else if (regex && !regex.test(valor)) {
        mostrarError(formControl, aviso, mensajeError);
    } else {
        mostrarExito(formControl);
    }
}

function mostrarError(formControl, aviso, mensaje) {
    aviso.textContent = mensaje;
    formControl.className = 'form-control falla';
}

function mostrarExito(formControl) {
    formControl.className = 'form-control ok';
}

function limpiarMensajes() {
    document.getElementById('errorNombre').innerText = '';
    document.getElementById('errorApellido').innerText = '';
    document.getElementById('errorCorreo').innerText = '';
    document.getElementById('errorMensaje').innerText = '';
    document.getElementById('errorTipoConsulta').innerText = '';
    document.getElementById('mensajeExito').innerText = '';

    const formControls = document.querySelectorAll('.form-control');
    formControls.forEach((formControl) => {
        formControl.className = 'form-control';
    });
}
