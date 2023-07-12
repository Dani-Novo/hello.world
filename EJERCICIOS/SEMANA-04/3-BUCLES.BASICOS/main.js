"use strict";

/* Edita el archivo index.js para crear un bucle que imprima en la consola una línea por cada hora del día en formato 24 horas, de 0:00 a 23:00:

    Si la hora es anterior a las 8 de la mañana o posterior a las 22 debe imprimir solo la información de la hora, por ejemplo: "Son las 3:00"

    Si la hora está entre las 8 y las 22 debe imprimir la información de la hora seguída de "CUCÚ!", por ejemplo "Son las 17:00, CUCÚ!" */

for (let hora = 0; hora < 24; hora++) {
  if (hora < 8 || hora > 22) {
    console.log(`Son las ${hora}:00`);
  } else {
    console.log(`Son las ${hora}:00, CUCÚ!`);
  }
}
