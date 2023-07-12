"use strict";

/* Edita el fichero script.js y modifica la funcion quiz para cuando se ejecute que haga lo siguiente:

    1- Genere un número aleatorio entre 0 y 100 y lo guarde en una variable, este número será el que el usuario deba adivinar.

    2- Muestre una ventana de diálogo tipo prompt que pida al usuario que introduzca un número entre 0 y 100

    3- Si el número introducido es igual al generado en el punto 1, aparecerá en pantalla una ventana de diálogo tipo alertque informará al usuario que ha ganado; si no, el alert indicará si el número introducido es mayor o menor al que tiene que adivinar y dará una nueva oportunidad. */

function quiz() {
  // Escribe aquí tu código
  let numAzar = Math.floor(Math.random() * 101);
  // console.log(numAzar);

  for (let intentos = 1; intentos <= 5; intentos++) {
    let numUsuario = parseInt(prompt("Introduce un número entre 0 y 100"));

    if (numUsuario === numAzar) {
      alert("¡Has ganado!");
      return;
    } else if (numUsuario > numAzar) {
      alert("El número introducido es mayor, tienes otra oportunidad.");
    } else {
      alert("El número introducido es menor, tienes otra oportunidad.");
    }
  }
  alert("¡Has perdido!");
}

quiz();
