const persona = {
  nombre: "Sebastian",
  edad: 18,
  ciudad: "Medellin",
};

console.log(
  "Primera persona identificada: ",
  persona.nombre,
  "Edad: ",
  persona.edad,
  "Ciudad: ",
  persona.ciudad
);

// Ahora se van a cambiar los atributos de la persona
persona.nombre = "Maria";
persona.edad = 15;
persona.ciudad = "Cali";

console.log(
  "Segunda persona identificada: ",
  persona.nombre,
  "Edad: ",
  persona.edad,
  "Ciudad: ",
  persona.ciudad
);
