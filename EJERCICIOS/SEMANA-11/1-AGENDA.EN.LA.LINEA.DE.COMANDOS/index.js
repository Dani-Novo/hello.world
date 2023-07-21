let args = require("minimist")(process.argv.slice(2));
let fs = require("fs");
let path = require("path");

//Generamos la ruta al json uniendo su nombre a la ruta de la raíz
let filePath = path.join(__dirname, "events.json");

//Destrucuring de los argumentos
let { date, event } = args;

//FUNCION PARA AÑADIR UN EVENTO
function addEvent() {
  //Obtenemos la lista de eventos (un array)
  let eventList = getData();

  //Creamos el objeto del evento con sus datos (de los argumentos)
  let eventObj = { date, event };

  //Añadimos el objeto a la lista
  eventList.push(eventObj);

  //Sobreescribimos el archivo (si no existe, se crea solo)
  fs.writeFileSync(filePath, JSON.stringify(eventList));
}

//FUNCION PARA LEER EL ARCHIVO (debe devolver un array)
function getData() {
  //Comprobamos que existe
  let exists = fs.existsSync(filePath);

  //Si no existe, devolvemos un array vacio
  if (!exists) {
    return [];
  }

  //Si existe, lo leemos
  let data = fs.readFileSync(filePath);

  //Parseamos los datos para poder trabajar con ellos
  let events = JSON.parse(data);

  //Devolvemos la lista
  return events;
}

//FUNCION PARA LISTAR LOS EVENTOS
function listEvents() {
  //Obtenemos la lista
  let eventList = getData();

  //Si no hay eventos, se muestra un mensaje
  if (!eventList.length) {
    console.log("No hay eventos");
    return;
  }

  //Ordenamos la lista
  //Para eso hay que comparar las fechas convirtiendolas a objeto fecha
  eventList.sort((evA, evB) => new Date(evB.date) - new Date(evA.date));

  //Recorremos el array sacando un string por cada evento
  for (let event of eventList) {
    console.log(`📆 ${event.date}: ${event.event}`);
  }
}

//Gestinamos qué función se va a ejecutar según los argumentos
try {
  if (args.date?.length && args.event?.length) {
    console.log("Añadiendo evento");
    addEvent();
  } else if (args["list-events"]) {
    console.log("Listando eventos");
    listEvents();
  } else {
    //Si falta algún argumento lanzamos error
    throw new Error("Faltan argumentos");
  }
} catch (e) {
  console.log("Hubo un error:", e.message);

  //Si hay un error, mostramos la ayuda
  printHelp();
}

function printHelp() {
  console.log("Uso:");
  console.log("--date fecha (formato AAAA/MM/DD)");
  console.log("--event texto del evento");
  console.log("Ambos argumentos son necesarios para añadir un evento");
  console.log("--list-events listar eventos");
}
