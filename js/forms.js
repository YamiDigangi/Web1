const formulario = document.querySelector('#formulario');
const btnEnviar = document.getElementById("btnEnviar");
const ltaErrores = document.getElementById('ltaErrores');
const mensajeExitoso = document.getElementById('mensajeExitoso');

function validarCampos(){
  let nombre = document.getElementById('nombre');
  let nombreValor = nombre.value.trim();
  let apellido = document.getElementById('apellido');
  let apellidoValor = apellido.value.trim();
  let email = document.getElementById('correo');
  let emailValor = email.value.trim();
  let errores = [];
  let campo_error = null;
 
  for (let v of formulario.querySelectorAll("input, select, div")) {
    v.classList.remove("error");
  }

  if (nombreValor === '') {
    errores.push("Falta el nombre");
    campo_error = nombre;
    nombre.classList.add("error");
  } else if (!/^[A-Za-z\s]+$/.test(nombreValor)) {
    errores.push("El nombre no puede contener números");
    campo_error = nombre;
    nombre.classList.add("error");
  } 

  if (apellidoValor === '') {
    errores.push("Falta el apellido");
    campo_error = apellido;
    apellido.classList.add("error");
  } else if (!/^[A-Za-z\s]+$/.test(apellidoValor)) {
    errores.push("El apellido no puede contener números");
    campo_error = apellido;
    apellido.classList.add("error");
  }

  if (emailValor === '') {
    errores.push("Falta el correo electrónico");
    campo_error = email;
    email.classList.add("error");
  } else if (!validarEmail(emailValor)) {
    errores.push("El e-mail no es válido");
    campo_error = email;
    email.classList.add("error");
  } 

  ltaErrores.innerHTML = "";
  if (errores.length > 0) {
    for (let i = 0; i < errores.length; i++) {
      let li = document.createElement("li");
      li.innerHTML = errores[i];   
      ltaErrores.appendChild(li);
    }
    if (campo_error != null) {
      campo_error.focus();
    }
    return false;
  }

  let mje = `Hola ${nombre.value} ${apellido.value}, gracias por completar nuestro formulario a la brevedad te enviaremos nuestra respuesta. Muchas gracias!`;
  mensajeExitoso.innerHTML = mje;
  return false;
}

function validarEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

