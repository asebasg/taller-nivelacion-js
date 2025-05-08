// Reescribe el siguiente if-else usando el operador ternario
/*
if (edad >= 18) {
    return "Puede votar";
} else {
    return "No puede votar";
}
*/

let edadStr = prompt("Ingrese su edad a continuacion:");
let edad = parseInt(edadStr);

let mensaje = edad >= 18 ? "Usted puede votar" : "Usted no puede votar";
console.log(mensaje);