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
