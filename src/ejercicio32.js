/**
 * Crea una función que salude a un usuario
 * Debe tener parámetros por defecto para:
 * - nombre
 * - idioma (español, inglés, francés)
 * - hora del día
 */

function saludo(nombre = "Usuario", idioma = "español", hora = "día") {
  return `Hola ${nombre}. El idioma seleccionado es ${idioma} y la hora de acceso es ${hora}.`;
}

// Aqui se llama la funcion con los valores del objeto
const saludoPersonalizado = {
  nombre: "Sebastian",
  idioma: "español",
  hora: "tarde",
};

// Se llama la función con los valores del objeto que pusimos
console.log(
  saludo(
    saludoPersonalizado.nombre,
    saludoPersonalizado.idioma,
    saludoPersonalizado.hora
  )
);

// Aqui se llama la funcion con los valores del objeto
// console.log(saludo());
