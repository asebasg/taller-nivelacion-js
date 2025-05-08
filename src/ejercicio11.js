const PI = 3.14159;

let radioStr = prompt("Ingresa el radio del circulo:");
let radio = parseFloat(radioStr);
let areaStr = prompt("Ingresa el area del circulo:");
let area = parseFloat(areaStr);

let total = PI * radio * radio;
console.log(`El area del circulo es ${total}.`)