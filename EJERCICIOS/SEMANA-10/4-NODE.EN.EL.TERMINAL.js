/*
Crea un programa de node que te salude, te pregunte por tu estado de ánimo y te dé una respuesta amable.

Para que funcione necesitas usar los siguientes módulos de npm:

  - minimist: https://www.npmjs.com/package/minimist

  - prompt-sync: https://www.npmjs.com/package/prompt-sync

El primero permite leer los argumentos que le envias al programa de node al ejecutarlo desde el terminal, el segundo permite que se puedan introducir datos mediante el teclado cuando el programa se está ejecutando (similar al window.prompt de DOM, pero para el terminal).

Es tu trabajo ver como funcionan estos módulos usando la documentación que puedes encontrar en los enlaces anteriores.

(Los módulos de npm ya están referenciados en el package.json por lo que lo primero que tienes que hacer en la consola es "npm install" para instalar los módulos.)

Después puedes ejecutar el programa de esta forma:

  - node index.js --name=Berto

Obviamente puedes cambiar "berto" por lo que tu quieras. Si ejecutas el programa de esta manera, deberá mostrar en el terminal "Hola Berto" por la consola.

Si lo ejecutas sin indicar un nombre:

  - node index.js

El programa debe mostrar en el terminal simplemente "Hola".

A continuación preguntará "¿Qué tal estás?" y permitirá al usuario introducir una respuesta. En base a ella se mostrarán mensajes diferentes.

Debe contemplar como mínimo las respuestas "bien" y "mal"; pero no hay máximo, ¡puedes añadir todas las que se te ocurran!. No debe distinguir entre mayúsculas y minúsculas.

Si la respuesta no está contemplada mostrará el mensaje "Lo siento, no te he entendido" y volverá a preguntar hasta que se introduzca una respuesta contemplada o se fuerce la salida del programa usando "Ctrl+C".

En ningún caso debe mostrar errores.
*/

const prompt = require("prompt-sync")();
const parseArgs = require("minimist");

const args = parseArgs(process.argv.slice(2));
const name = args.name;

console.log(`Hola ${name || ""}`);

function ask() {
  let mood = prompt("¿Qué tal estás? ");

  if (mood === null) {
    console.log("Adios");
    return;
  }

  switch (mood.toLowerCase()) {
    case "bien":
      console.log("¡Me alegro! Espero que disfrutes del día.");
      break;

    case "mal":
      console.log(
        "Siento oir eso. La energía y la persistencia conquistan todas las cosas."
      );
      break;

    default:
      console.log("Lo siento, no te he entendido.");
      ask();
  }
}

ask();
