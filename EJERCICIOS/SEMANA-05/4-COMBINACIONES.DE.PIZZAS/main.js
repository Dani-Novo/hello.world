"use strict";

/* Una pizerría ofrece pizzas "mitad y mitad".

Cada mitad debe corresponderse a una pizza de su catálogo, pero éste cambia constantemente, por lo que el número de combinaciones posibles también.

Completa el fichero index.js de la derecha donde puedes ver una función que recibe el catálogo de pizzas y debería retornar un array con la lista de combinaciones posibles.

Ten en cuenta esto:

    1- Seguramente en tu primera aproximación devuelva pizzas con la misma combinación pero al revés (ej: carbonara y barbacoa, barbacoa y carbonara) pero ¡son la misma pizza!. Debemos evitar eso.

    2- De la misma manera, si las dos mitades son iguales (ej: carbonara y carbonara) no sería una pizza "mitad y mitad", sino una pizza normal.

Valoraremos una solución simple a los dos problemas anteriores, ¡la solución es más sencilla de lo que pueda parecer!.

El resultado debe ser este:

[
  "margarita y cuatro quesos",
  "margarita y prosciutto",
  "margarita y carbonara",
  "margarita y barbacoa",
  "margarita y tropical",
  "cuatro quesos y prosciutto",
  "cuatro quesos y carbonara",
  "cuatro quesos y barbacoa",
  "cuatro quesos y tropical",
  "prosciutto y carbonara",
  "prosciutto y barbacoa",
  "prosciutto y tropical",
  "carbonara y barbacoa",
  "carbonara y tropical",
  "barbacoa y tropical",
]; */

const pizzas = [
  "margarita",
  "cuatro quesos",
  "prosciutto",
  "carbonara",
  "barbacoa",
  "tropical",
];

function combine(pizzas) {
  const combinations = [];

  // Escribe aquí tu código

  for (let i = 0; i < pizzas.length; i++) {
    for (let j = i + 1; j < pizzas.length; j++) {
      let primeraMitad = pizzas[i];
      let segundaMitad = pizzas[j];

      if (primeraMitad !== segundaMitad) {
        let combination = `${primeraMitad} y ${segundaMitad}`;
        combinations.push(combination);
      }
    }
  }

  return combinations;
}

console.log(combine(pizzas));
