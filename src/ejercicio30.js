/** Funciones
 * 1. Crea una función usando declaración de función
 * 2. Crea la misma función usando expresión de función
 * 3. Explica las diferencias en el hoisting de ambas
 */

function saludoDeclaracion() {
    console.log("Hola, saludos. Este es una funcion declarada.")
};

const saludoExpresion = function(){
    console.log("Hola, saludos. Este es una funcion expresion")
};

saludoDeclaracion();
saludoExpresion();

/**
 * En la primera funcion, se declara dicha funcion antes de ser usada
 * Mientras que en la segunda, se declaro un const para la funcion y dentro 
 * de este se desarrolla toda la funcion en si.
 * 
 * El hoisting de una funcion declarada es elevada, mientras que la expresada
 * no lo esta y debe declararse antes de ser usada.
 */