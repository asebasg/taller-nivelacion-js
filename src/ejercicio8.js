// Crea una función que determine si una persona puede conducir
// Debe comprobar: edad >= 18 && tieneCarnet && !estaInhabilitado

let edadStr = prompt("Ingrese su edad:");
let edad = parseInt(edadStr);
let tieneCarnetStr = prompt("¿Tiene carnet de conducir? (si/no):");
let tieneCarnet = tieneCarnetStr.toLowerCase() === "si";
let estaInhabilitadoStr = prompt("¿Está inhabilitado para conducir? (si/no):");
let estaInhabilitado = estaInhabilitadoStr.toLowerCase() === "si";

function puedeConducir(edad, tieneCarnet, estaInhabilitado) {
  if (edad >= 18 && tieneCarnet === "si" && estaInhabilitado === "si") {
    return true;
  }
}

puedeConducir(edad, tieneCarnet, estaInhabilitado);

/*
if (puedeConducir == true) {
    console.log("Puede conducir");
} else {
    console.log("Paila");
}
*/
