document
  .getElementById("formContacto")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    //Valores del formulario
    const username = document.getElementById("username").value;
    const phoneNum = document.getElementById("phoneNum").value;
    const email = document.getElementById("email").value;
    const mensage = document.getElementById("mensage").value;
    const contact = document.getElementById("contact").value;

    limpiarMensajes();

    // Validar campos

    let errores = false;

    if (username === "" || username.length < 3) {
      mostrarError(
        "username",
        "⚠️ El nombre debe tener al menos 3 caracteres."
      );
      errores = true;
    }

    if (mensage === "" || mensage.length < 10) {
      mostrarError(
        "mensage",
        "⚠️ El mensaje debe tener al menos 10 caracteres."
      );
      errores = true;
    }
    if (errores) {
      return;
    }
    alert("✅ Formulario enviado correctamente. ¡Gracias por contactarnos!");
    document.getElementById("formContacto").reset();
  });

// Función para mostrar errores debajo del campo
function mostrarError(idCampo, mensaje) {
  var campo = document.getElementById(idCampo);
  var mensajeError = document.createElement("p");
  mensajeError.innerText = mensaje;
  mensajeError.style.color = "red";
  mensajeError.classList.add("mensaje-error");
  campo.parentNode.appendChild(mensajeError);
}

// Función para limpiar mensajes antes de validar
function limpiarMensajes() {
  var mensajes = document.querySelectorAll(".mensaje-error");
  for (var i = 0; i < mensajes.length; i++) {
    mensajes[i].remove();
  }
}
