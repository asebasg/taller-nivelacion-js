// Declara dos variables enteras y realiza operaciones de desplazamiento a la izquierda y derecha
// en una de ellas, y operaciones AND, OR y XOR entre ambas.

let a = 5;
let b = 6;

let izq = a << 1;
console.log(izq);

let der = a >> 1;
console.log(der);

let and = a & b;
console.log(and);

let or = a | b;
console.log(or);

let xor = a ^ b;
console.log(xor);

console.log("Desplazamiento a la izquierda: " + izq);
console.log("Desplazamiento a la derecha: " + der);
console.log("AND bit a bit: ", and);
console.log("OR bit a bit",  or);
console.log("XOR bit a bit ", xor);