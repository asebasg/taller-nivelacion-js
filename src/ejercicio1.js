let num = 50;
let numStr = String(num); // Aqui se convierte a string

console.log(`El numero es ${numStr}`);
console.log("Se transformara de nuevo el mismo numero para hacer una operacion aritmetica");

let num2 = parseInt(numStr); // Aqui se convierte a entero
let operacion = num2 * 8;
console.log(numStr + " * 8 = " + operacion); // Aqui se hace la operacion aritmetica
console.log(`El resultado de la operacion dada por el numero ${numStr} es ${operacion}`);