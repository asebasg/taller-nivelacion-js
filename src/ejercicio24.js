/**
 * Declara dos variables, una como número y otra como cadena con el mismo valor.
 * Utiliza los operadores de igualdad estricta (===) y no estricta (==) para comparar ambas variables.
 */

let num = 7;
let str = "7";

let igualdadEstricta = num === str;
let igualdadNoEstricta = num == str;

console.log(`Numeros: ${num}, ${str}`);
console.log(`Igualdad estricta: ${igualdadEstricta}`);
console.log(`Igualdad no estricta: ${igualdadNoEstricta}`);