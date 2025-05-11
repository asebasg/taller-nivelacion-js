/**
 * Implementa un juego de "adivina el número" usando:
 * 1. Un loop while
 * 2. Un loop do-while
 * ¿Cuál es la diferencia en el comportamiento?
 */

let num = 12;
let i = 0;

let numInt = parseInt(
  prompt("Adivina el número, ingresa un numero del 1 al 20 a continuación:")
);
// Se convierte el input en un entero en la misma linea
if (numInt <= 20) {
  while (isNaN(numInt)) {
    numInt = pareseInt(prompt("Ingresa un numero valido:"));
  }

  while (numInt !== num) {
    console.log("¡Número incorrecto! Intenta de nuevo");
    numInt = parseInt(prompt("Ingresa otro numero:")); // Solicita un nuevo numero al usuario en caso de no acertar
    i++; // Intentos

    while (isNaN(numInt)) {
      numInt = pareseInt(prompt("Ingresa un numero valido:"));
    }
  }
  console.log("¡Has acertado el numero correcto!");
  console.log("Numero de intentos: ", i);
} else {
  console.log("Debes elegir un numero entre 1 y 20");
}
