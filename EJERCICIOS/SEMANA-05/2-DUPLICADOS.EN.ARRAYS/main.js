"use strict";

/* Edita el archivo index.js para crear una función que reciba un Array como parámetro y retorne otro Array con los contenidos del Array inicial pero eliminando los duplicados.

Ejecuta esa función pasándole como parámetro el Array names e imprime en la consola el resultado.

Debería imprimir esto:

[ 'A-Jay', 'Manuel',
  'Eddie', 'Su',
  'Reean', 'Zacharie',
  'Tyra',  'Rishi',
  'Arun',  'Kenton' 
] */

const names = [
  "A-Jay",
  "Manuel",
  "Manuel",
  "Eddie",
  "A-Jay",
  "Su",
  "Reean",
  "Manuel",
  "A-Jay",
  "Zacharie",
  "Zacharie",
  "Tyra",
  "Rishi",
  "Arun",
  "Kenton",
];

function eliminarDuplicados(array) {
  return Array.from(new Set(array));
}

const nombresSinRepetir = eliminarDuplicados(names);

console.log(nombresSinRepetir);
