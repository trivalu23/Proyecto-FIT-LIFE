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
