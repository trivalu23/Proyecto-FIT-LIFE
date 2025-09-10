function calculateIMC() {
  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseFloat(document.getElementById("height").value);

  if (!isNaN(weight) && !isNaN(height)) {
    var bmi = weight / height ** 2;
    var result = document.getElementById("result");

    result.innerHTML = "Tu IMC es:" + bmi.toFixed(2);

    // Clasificación del IMC

    if (bmi < 18.5) {
      result.innerHTML += " - Bajo peso";
    } else if (bmi < 25) {
      result.innerHTML += " - Peso normal";
    } else if (bmi < 30) {
      result.innerHTML += " - Sobrepeso";
    } else {
      result.innerHTML += " - Obesidad";
    }
  }
}

// DOM: obtener el botón
const button = document.getElementById("goToPage");

// Escuchar el clic y redirigir a otra página
button.addEventListener("click", () => {
  window.location.href = "../html/formulario-servicios.html";
});
