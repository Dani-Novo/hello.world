"use strict";

/* Partiendo del código del ejercicio anterior haz que la cantidad de veces que aparezca "CUCÚ!" entre las 8 y las 22 sea correspondiente a la hora, por ejemplo a las 10 de la mañana debería poner:

    "Son las 10:00, CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ!"

Con una dificultad extra: el número de cucús debe ser siempre en correspondiente a las horas en formato 12h y no 24h, por lo que a las 5 de la tarde (17:00) debe poner solo 5 "CUCÚ!" y no 17:

"Son las 17:00, CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ!" */

for (let hora = 0; hora < 24; hora++) {
  let hora12 = hora % 12 || 12;
  if (hora < 8 || hora > 22) {
    console.log(`Son las ${hora}:00`);
  } else {
    const repeticionesCuco = hora12;
    const cuco = " CUCÚ!".repeat(repeticionesCuco);
    console.log(`Son las ${hora}:00. ${cuco}`);
  }
}
