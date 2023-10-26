//window.addEventListener('load', ()=> {
    const formulario = document.querySelector('#formulario');
    const nombre = document.getElementById('nombre');
    const validacion = new RegExp('^[A-Z]+$', 'i');
    const apellido = document.getElementById('apellido');
    const email = document.getElementById('correo');
    
 
    function validarCampos() {
        // Capturamos los valores que ingresa el usuario
        const nombreValor = nombre.value.trim()  //eliminamos los espacios en blanco
        const apellidoValor = apellido.value.trim()
        const emailValor = email.value.trim()
      
        if(nombreValor === '') {           
            validarFalla(nombre, 'Campo Vacio')
            alert("Ingres un nombre");
            nombre.focus();
        }else if (!/^[A-Za-z\s]+$/.test(nombreValor)){
            validarFalla(nombre, 'El nombre no puede contener numeros');
            nombre.focus();
        }else{
            validarOk(nombre);
        }

    //valindando campo Apellido

        if(apellidoValor === '') {           
            validarFalla(apellido, 'Campo Vacio');
            alert("Ingres un apellido");
            apellido.focus();
        }else if (!/^[A-Za-z\s]+$/.test(apellidoValor)){
            validarFalla(apellido, 'El apellido no puede contener numeros');
            apellido.focus();
        }else{
            validarOk(apellido);
        } 

    //valindando campo email
        
        if(emailValor === '') {
            validarFalla(email, 'Campo Vacio');
            alert("Ingres un Correo");
            email.focus();
        }else if(!validarEmail(emailValor)) {
            validarFalla(email, 'El e-mail no es valido');
            email.focus();
        }else{
            validarOk(email);
        }


    }

    function validarFalla (input, msje) {
        const formControl = input.parentElement  //devuelve el elemnto padre del elemento especificado
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje

        formControl.className = 'form-control falla'
    }

    function validarOk (input) {
        const formControl = input.parentElement
        formControl.className = 'form-control ok'
    }

    function validarEmail(email){
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

 //})