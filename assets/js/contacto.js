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

// Mostrar errores debajo del campo
function mostrarError(idCampo, mensaje) {
  const campo = document.getElementById(idCampo);
  const mensajeError = document.createElement("p");
  mensajeError.innerText = mensaje;
  mensajeError.style.color = "red";
  mensajeError.classList.add("mensaje-error");
  campo.parentNode.appendChild(mensajeError);
}

// Limpiar mensajes antes de validar
function limpiarMensajes() {
  const mensajes = document.querySelectorAll(".mensaje-error");
  for (let i = 0; i < mensajes.length; i++) {
    mensajes[i].remove();
  }
}
