/**
 * Crea una función que reciba un número n y use un loop for para:
 * 1. Calcular la suma de todos los números de 1 a n
 * 2. Calcular el factorial de n
 */

let nS = prompt("Ingresa un numero");
let n = parseFloat(nS);

function SumaFactorial(n) {
  let suma = 0;
  let factorial = 0;

  for (let i = 1; i <= n; i++) {
    suma += i; // La suma se autoincrementa
    factorial *= i; // El factorial se autoincrementa
  }

  return { suma, factorial };
}

const { suma, factorial } = SumaFactorial(n); // Aqui se llama a la funcion para obtener sus resultados

console.log(`La suma de los numeros de 1 a ${n} es: ${suma}`);
console.log(`El factorial de ${n} es ${factorial}`);
