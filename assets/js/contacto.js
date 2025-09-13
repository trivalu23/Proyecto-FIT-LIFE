document
  .getElementById("formContacto")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    //Valores del formulario
    const username = document.getElementById("username").value.trim();
    const phoneNum = document.getElementById("phoneNum").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensage = document.getElementById("mensage").value.trim();
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

    if (phoneNum.length !== 9 || isNaN(phoneNum)) {
      mostrarError(
        "phoneNum",
        "⚠️ El número de teléfono debe tener 9 números."
      );
      errores = true;
    }

    if (!email.includes("@") || !email.includes(".")) {
      mostrarError("email", "⚠️ Ingrese un correo electrónico válido.");
      errores = true;
    }

    if (mensage === "" || mensage.length < 10) {
      mostrarError(
        "mensage",
        "⚠️ El mensaje debe tener al menos 10 caracteres."
      );
      errores = true;
    }

    if (contact === "") {
      mostrarError("contact", "⚠️ Seleccione un medio de contacto.");
      errores = true;
    }

    if (errores) {
      return;
    }

    if (!confirm("¿Desea enviar el formulario con estos datos?")) {
      return;
    }

    alert("✅ Formulario enviado correctamente. ¡Gracias por contactarnos!");
    document.getElementById("formContacto").reset();
  });

// Función para mostrar errores debajo del campo
function mostrarError(idCampo, mensaje) {
  const campo = document.getElementById(idCampo);
  const mensajeError = document.createElement("p");
  mensajeError.innerText = mensaje;
  mensajeError.classList.add("mensaje-error");
  campo.parentNode.appendChild(mensajeError);
}

// Función para limpiar mensajes antes de validar
function limpiarMensajes() {
  const mensajes = document.querySelectorAll(".mensaje-error");
  for (let i = 0; i < mensajes.length; i++) {
    mensajes[i].remove();
  }
}
