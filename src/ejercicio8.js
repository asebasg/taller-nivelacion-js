// Crea una función que determine si una persona puede conducir
// Debe comprobar: edad >= 18 && tieneCarnet && !estaInhabilitado

let edadStr = prompt("Ingrese su edad:");
let edad = parseInt(edadStr);
let tieneCarnetStr = prompt("¿Tiene carnet de conducir? (si/no):");
let tieneCarnet = tieneCarnetStr.toLowerCase() === "si";
let estaInhabilitadoStr = prompt("¿Está inhabilitado para conducir? (si/no):");
let estaInhabilitado = estaInhabilitadoStr.toLowerCase() === "no";

function puedeConducir(edad, tieneCarnet, estaInhabilitado) {
  if (edad >= 18 && tieneCarnet && estaInhabilitado) {
    return true;
  }
  return false;
}

const resultado = puedeConducir(edad, tieneCarnet, estaInhabilitado);

if (resultado) {
    console.log("Puede conducir");
} else {
    console.log("No puedes conducir");
}
