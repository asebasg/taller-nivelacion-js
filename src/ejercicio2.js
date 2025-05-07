let numero = 5;
let texto = "10";

console.log(
  "Inicialmente sumaremos los numeros 5 y 10, pero veremos que no lo hacen aritmeticamente, sino concatenandose"
);
let suma = numero + texto;
console.log(`${numero} + ${texto} = ${suma}`);

let num = parseInt(texto);
let suma2 = numero + num;

console.log(
  "Ahora bien, aqui se transformo el numero en texto a entero para poderse suamr aritmeticamente"
);
console.log(`${numero} + ${num} = ${suma2}`);

console.log(
  "La diferencia entre la concatenacion y la suma aritmetica es que la concatenacion une a los dos valores que definimos (sin importr si es un valor numero o no), mientras que en la suma aritmetica se paso el valor string a int para poder sumarse."
);