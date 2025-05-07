let a = prompt("Ingrese el primer numero: ");
let b = prompt("Ingrese el segundo numero: ");

let num1 = parseInt(a);
let num2 = parseInt(b);

function operacion(num1, num2) {
  const resultado = {
    suma: num1 + num2,
    resta: num1 - num2,
    multiplicacion: num1 * num2,
    division: num1 / num2,
    modular: num1 % num2,
  };
  return resultado;
}

const resultado = operacion(num1, num2);

console.log("El resultado de la suma es :", resultado.suma);
console.log("El resultado de la resta es :", resultado.resta);
console.log("El resultado de la multiplicacion es :", resultado.multiplicacion);
console.log("El resultado de la division es :", resultado.division);
console.log("El residuo de la division es :", resultado.modular);
