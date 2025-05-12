// Convierte las siguientes funciones a arrow functions:
function sumar(a, b) {
  return a + b;
}

function saludar(nombre) {
  return "Hola " + nombre;
}

function calcularArea(base, altura) {
  let area = base * altura;
  return area;
}

// Arrow functions
// Se le llama asi porque se utiliza la funcion en una linea

const arrowFSuma = (a, b) => a + b;

const arrowFSaludar = (nombre) => "Hola, " + nombre;

const arrowFArea = (base, altura) => base * altura;

console.log(arrowFSuma(1, 2)); // Se llama la funcion y se le asignan valores a las variables
console.log(arrowFSaludar("Sebastian"));
console.log(arrowFArea(2, 5));
