"use strict";

/* Edita el archivo index.js para crear el código necesario para que partiendo del array de puntuaciones propuesto se imprima por la consola el mejor y peor equipo con su total de puntos respectivo.

El resultado que tiene que aparecer en la consola al ejecutarlo debe ser exactamente igual a este: 

 - El mejor equipo es Toros Negros con un total de 28 puntos
 - El peor equipo es Ciervos Celestes con un total de 10 puntos

Para hacer esto tienes que usar los métodos de array que aprendiste esta semana. */

const firstRound = [
  { team: "Toros Negros", scores: [1, 3, 4, 2, 10, 8] },
  { team: "Águilas Plateadas", scores: [5, 8, 3, 2, 5, 3] },
  { team: "Leones Carmesí", scores: [5, 4, 3, 1, 2, 3, 4] },
  { team: "Rosas Azules", scores: [2, 1, 3, 1, 4, 3, 4] },
  { team: "Mantis Verdes", scores: [1, 4, 5, 1, 3] },
  { team: "Ciervos Celestes", scores: [3, 5, 1, 1] },
  { team: "Pavos Reales Coral", scores: [2, 3, 2, 1, 4, 3] },
  { team: "Orcas Moradas", scores: [2, 3, 3, 4] },
];

let puntosEquipo = firstRound.map((equipo) => {
  let puntosTotales = equipo.scores.reduce((total, score) => total + score, 0);
  return { team: equipo.team, puntosTotales: puntosTotales };
});

puntosEquipo.sort((a, b) => b.puntosTotales - a.puntosTotales);

// console.log(puntosEquipo);

console.log(
  `El mejor equipo es ${puntosEquipo[0].team} con un total de ${puntosEquipo[0].puntosTotales} puntos`
);

console.log(
  `El peor equipo es ${
    puntosEquipo[puntosEquipo.length - 1].team
  } con un total de ${
    puntosEquipo[puntosEquipo.length - 1].puntosTotales
  } puntos`
);
