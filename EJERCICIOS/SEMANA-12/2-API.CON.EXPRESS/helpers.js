const fs = require("fs").promises;

const path = require("path");

//ruta a los datos
const dataPath = path.join(__dirname, "data.json");

async function readFile() {
  try {
    let data = await fs.readFile(dataPath);

    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

module.exports = {
  readFile,
  dataPath,
};
