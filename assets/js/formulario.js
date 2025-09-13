//  parte 1 del formulario
class MemberPart1 {
  constructor(nombre = "", edad = null, genero = "", plan = "") {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
    this.plan = plan;
  }

  // validación de los campos
  validar() {
    if (!this.nombre || this.nombre.trim().length === 0)
      return { ok: false, field: "nombre" };
    if (!Number.isInteger(this.edad) || this.edad < 10 || this.edad > 120)
      return { ok: false, field: "edad" };
    if (!this.genero) return { ok: false, field: "genero" };
    if (!this.plan) return { ok: false, field: "plan" };
    return { ok: true };
  }

  // obtiene los valores desde el DOM del formulario
  static fromForm() {
    const form = document.getElementById("signup-parte1");
    if (!form) return null;
    const nombre = form.nombre.value.trim();
    const edad = form.edad.value ? Number(form.edad.value) : null;
    const genero = form.genero.value;
    const plan = form.plan.value;
    return new MemberPart1(nombre, edad, genero, plan);
  }
}


// Datos base

const precios = {
  basico: 80,
  estandar: 150,
  intensivo: 200,
  online: 50
};

const descuentos = {
  "3_meses": 0.1,   // 10%
  "6_meses": 0.2,   // 20%
  "12_meses": 0.3   // 30%
};


// Función calcular precio

function calcularPrecio(plan, duracion) {
  let precioMensual = precios[plan];
  if (!precioMensual) return null; 

  // Duración en meses
  let meses = 1;
  if (duracion === "3_meses") meses = 3;
  if (duracion === "6_meses") meses = 6;
  if (duracion === "12_meses") meses = 12;

  let subtotal = precioMensual * meses;
  let descuento = 0;
  let total = subtotal;

  // descuentos planes cada 3,6 y 12 meses
  if (( plan=== "basico"||  plan === "estandar" || plan === "intensivo" || plan === "online" ) && descuentos[duracion]) {
    descuento = subtotal * descuentos[duracion];
    total = subtotal - descuento;
  }

  return {
    subtotal,
    descuento,
    total,
    meses
  };
}


// Función principal

function calcularPlan() {
  const nombre = document.getElementById("nombre")?.value.trim() || "";
  const edad = document.getElementById("edad")?.value || "";
  const genero = document.getElementById("genero")?.value || "";
  const plan = document.getElementById("plan")?.value || "";
  const duracion = document.getElementById("duración").value;
  const objetivo = document.getElementById("objetivo").value;
  const condicion = document.getElementById("condicion").value;
  const preferencias = document.getElementById("preferencias").value;

  const mensaje = document.getElementById("mensaje");

  // Validaciones
  if (!nombre || !edad || !genero || !plan || !duracion || !objetivo || !condicion || !preferencias) {
    mensaje.style.display = "block";
    mensaje.style.background = "#fecaca"; 
    mensaje.style.color = "#991b1b";      
    mensaje.innerHTML = "⚠️ Por favor, completa todos los campos.";
    return;
  }

  if (edad < 18) {
    mensaje.style.display = "block";
    mensaje.style.background = "#fef3c7"; 
    mensaje.style.color = "#92400e";     
    mensaje.innerHTML = "⚠️ La edad mínima para inscribirse es 18 años.";
    return;
  }

  // Calcular precio
  const resultado = calcularPrecio(plan, duracion);

  // Descripción por plan
  let descripcionPlan = "";
  switch (plan) {
    case "basico":
      descripcionPlan = "✔️ El plan Básico incluye 2 entrenamientos por semana, (2h cada entrenamiento),de manera Presencial";
      break;
    case "estandar":
      descripcionPlan = "✔️ El plan Estándar incluye 3 entrenamientos por semana, (2h cada  entrenamiento) ,monitoreo semanal e incluye recetario de recetas saludables,de manera Presencial";
      break;
    case "intensivo":
      descripcionPlan = "✔️ El plan Intensivo incluye 5 entrenamientos por semana (2h cada entrenamiento), monitoreo semanal, coach personalizado y recetario de comidas saludables,de manera Presencial.";
      break;
    case "online":
      descripcionPlan = "✔️ El plan Online incluye 2 entrenamientos por semana (2h cada entrenamiento), clases grabadas, asesorías virtuales y acceso a la comunidad online.";
      break;
  }

  // Mostrar mensaje
  mensaje.style.display = "block";
  mensaje.style.background = "rgba(250, 218, 237, 1)";
  mensaje.style.color = "#000";      

  // Si tiene descuento, mostrar original y con descuento
  if (resultado.descuento > 0) {
    mensaje.innerHTML = `
      ✅ ¡Hola <b>${nombre}</b>!<br>
      🔹 Edad: ${edad} años - Género: ${genero}<br>
      🔹 Objetivo: ${objetivo.replace("_", " ")}<br>
      🔹 Condición física: ${condicion}<br>
      🔹 Preferencia de entrenamiento: ${preferencias}<br><br>

      ✅ <b>Plan elegido:</b> ${plan.toUpperCase()} por ${resultado.meses} mes(es).<br>
      ${descripcionPlan}<br><br>

      💵 Precio original: <s>S/ ${resultado.subtotal.toFixed(2)}</s><br>
      🔻 Descuento aplicado: S/ ${resultado.descuento.toFixed(2)}<br>
      💰 <b>Precio final: S/ ${resultado.total.toFixed(2)}</b>
    `;
  } else {
    // Sin descuento (básico y online)
    mensaje.innerHTML = `
      ✅ ¡Hola <b>${nombre}</b>!<br>
      🔹 Edad: ${edad} años - Género: ${genero}<br>
      🔹 Objetivo: ${objetivo.replace("_", " ")}<br>
      🔹 Condición física: ${condicion}<br>
      🔹 Preferencia de entrenamiento: ${preferencias}<br><br>

      ✅ <b>Plan elegido:</b> ${plan.toUpperCase()} por ${resultado.meses} mes(es).<br>
      ${descripcionPlan}<br><br>

      💰 <b>Precio total: S/ ${resultado.subtotal.toFixed(2)}</b><br>
      ❌ Este plan no tiene descuentos disponibles.
    `;
  }
}


// Evento al botón

document.getElementById("btnCalcular").addEventListener("click", function (e) {
  e.preventDefault(); 
  calcularPlan();
});