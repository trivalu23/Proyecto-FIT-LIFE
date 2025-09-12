document
  .getElementById("formContacto")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío del formulario por defecto
    const username = document.getElementById("username").value;
    const phoneNum = document.getElementById("phoneNum").value;
    const email = document.getElementById("email").value;
    const mensage = document.getElementById("mensage").value;
    const contact = document.getElementById("contact").value;

    // Aquí puedes agregar la lógica para enviar los datos del formulario
    console.log({ username, phoneNum, email, mensage, contact });
    alert("Formulario enviado. ¡Gracias por contactarnos!");
    // Reinicia el formulario después de enviarlo
    document.getElementById("formContacto").reset();
  });
