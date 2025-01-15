// OBTENIR ELEMENTS DEL FORMULARI
const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const edadInput = document.getElementById('edat');
const nomInput = document.getElementById('nom');
const modalitatSelect = document.getElementById('modalitat');
const pagamentSelect = document.getElementById('pagament');
const submitButton = form.querySelector('button');

// MISSATGES D'ERROR
const errorMessages = {
  email: "CORREU INVALID",
  edat: "EDAT MINIMA 12 ANYS",
  nom: "NOM OBLIGATORI",
  modalitat: "SELECCIONA MODALITAT",
  pagament: "SELECCIONA PAGAMENT"
};

// VALIDAR CORREU ELECTRÒNIC
function validarEmail() {
  const emailValue = emailInput.value;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(emailValue)) {
    alert(errorMessages.email);
    return false;
  }
  return true;
}

// VALIDAR EDAT
function validarEdad() {
  const edadValue = edadInput.value;
  if (edadValue < 12) {
    alert(errorMessages.edat);
    return false;
  }
  return true;
}

// VALIDAR CAMPOS
function validarCampos() {
  if (!nomInput.value) {
    alert(errorMessages.nom);
    return false;
  }
  if (!modalitatSelect.value) {
    alert(errorMessages.modalitat);
    return false;
  }
  if (!pagamentSelect.value) {
    alert(errorMessages.pagament);
    return false;
  }
  return true;
}

// MANEJAR ENVIAMENT DEL FORMULARI
function manejarEnvioFormulario(event) {
  event.preventDefault();

  if (validarEmail() && validarEdad() && validarCampos()) {
    // MOSTRAR MISSATGE DE CONFIRMACIÓ
    alert("Formulari enviat correctament!");

    // AMAGAR EL FORMULARI (OPCIONAL)
    form.style.display = 'none';

    // RESTABLIR EL FORMULARI DESPRÉS D'UN TEMPS (OPCIONAL)
    setTimeout(function() {
      form.reset();
      form.style.display = 'block';
    }, 5000); // 5 SEGONS
  }
}

// AFEGIR ESDEVENIMENT AL BOTÓ
submitButton.addEventListener('click', manejarEnvioFormulario);
