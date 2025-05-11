/*Declara un objeto con propiedades nombre y apellido. 
Utiliza la asignación por desestructuración para extraer y mostrar ambos valores en variables separadas.
 */

let persona = { nombre: "Sebastian", apellido: "Ospina" };

/**
 * La desestructuración de datos es como sacar cosas de una caja📦 (el objeto)
 * y ponerlas en lugares separados (las variables) para usarlas más fácilmente.
 */

let { nombre, apellido } = persona;

console.log(nombre);
console.log(apellido);
console.log(persona);
