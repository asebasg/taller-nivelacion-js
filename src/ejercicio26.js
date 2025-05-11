/**
 * Estructuras de control
 *
 * Crea una función que determine el precio de un boleto según la edad:
 * - Menores de 5: gratis
 * - Entre 5 y 12: 5€
 * - Entre 13 y 65: 10€
 * - Mayores de 65: 7€
 */

const PRECIO_INFANTIL = 5;
const PRECIO_ADULTO = 10;
const PRECIO_MAYOR = 7;

let edadStr = prompt("Ingrese la edad");
let edad = parseInt(edadStr);

function calculadorBoletos(edad) {
  if (isNaN(edad) || edad <= 0) { // Si la edad no es un numero o si es menor o igual a 0
    return `Ingrese una edad valida`;
  } else if (edad < 5) {
    return "La entrada es gratis";
  } else if (edad >= 5 && edad <= 12) {
    return `El valor de la entrada es ${PRECIO_INFANTIL}`;
  } else if (edad >= 13 && edad <= 65) {
    return `El valor de la entrada es ${PRECIO_ADULTO}`;
  } else if (edad > 65) {
    return `El valor de la entrada es ${PRECIO_MAYOR}`;
  } else {
    return `No ha ingreado una edad valida`;
  }
}

let mensaje = calculadorBoletos(edad); // Llama la funcion para convertirla en el mensaje de la consola
console.log(mensaje);
