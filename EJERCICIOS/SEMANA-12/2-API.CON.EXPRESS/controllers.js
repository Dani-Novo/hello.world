const fs = require("fs").promises;

const { readFile, dataPath } = require("./helpers");

async function list(req, res, next) {
  console.log("listando eventos");

  try {
    let data = await readFile();

    data.sort((evA, evB) => new Date(evB.date) - new Date(evA.date));

    res.send({
      message: "Listando eventos",
      data,
    });
  } catch (error) {
    next(error);
  }
}

async function newEvent(req, res, next) {
  try {
    console.log("Creando nuevo evento");
    let data = await readFile();

    let { date, event } = req.body;

    //Si se valida con joi, este paso no es necesario
    if (!date?.length || !event?.length) {
      throw new Error("Faltan datos");
    }

    //Si se valida con joi, se puede mandar directamente el req.body
    data.push({ date, event });

    await fs.writeFile(dataPath, JSON.stringify(data));

    res.send({
      message: "Evento añadido correctamente",
      data,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  list,
  newEvent,
};
