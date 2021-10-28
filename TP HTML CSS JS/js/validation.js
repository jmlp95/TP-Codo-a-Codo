window.onload = iniciar;

function iniciar() {
  document.getElementById('send').addEventListener('click', validate, false);
}

function valida_nombre_y_apellido_email() {
    var nombre = document.getElementById('FirtName');
    if (nombre.value == '') {
        alert('El campo Nombre no puede estar vacío');
        return false;
    }

    var apellido = document.getElementById('LastName');
    if (apellido.value == '') {
      alert('El campo Apellido no puede estar vacío');
      return false;
    }

    var email = document.getElementById('inputEmail4');
    if (email.value == '') {
        alert('El campo Email no puede estar vacío');
        return false;
    }

  return true;
}

function valida_email() {
    const email = document.getElementById('inputEmail4')
    let regExpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!regExpEmail.test(email.value)){
        alert('El email no es valido');
    } else{
        return true
    }
    
   
}

function validate(e) {
  if (valida_nombre_y_apellido_email()&&valida_email()){
    return alert('¡Gracias por registrarte! En breve te estara llegando un email de confirmación');
  }
  return false;
}