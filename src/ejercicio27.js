/**
 * Crea una función que tome un número del 1 al 7 y devuelva el día de la semana
 * Usa switch para implementarla
 */

let diaStr = prompt("Ingresa un numero del 1 al 7");
let diaSemana = parseInt(diaStr);

switch (diaSemana) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miercoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sabado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default:
    console.log("Dia no especificado");
}
