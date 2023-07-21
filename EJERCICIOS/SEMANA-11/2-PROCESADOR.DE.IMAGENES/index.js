const path = require("path");
const sharp = require("sharp");
const fs = require("fs").promises;

async function main() {
  try {
    //Leemos la ruta de la imagen de los argumentos
    let rutaBruta = process.argv[2];

    //Si no hay, lanzamos error
    if (!rutaBruta) {
      throw new Error("Hay que indicar la ruta");
    }

    //Obtenemos la ruta completa
    let rutaImg = path.resolve(rutaBruta);

    //Comprobamos que el archivo existe
    try {
      //(intentamos acceder)
      await fs.access(rutaImg);
    } catch (e) {
      //Si da error, no existe
      throw new Error("El archivo no exite", { cause: e });
    }

    //Obetenemos los datos que nos interesan de la imagen (con destructuring)
    let { dir, ext, name } = path.parse(rutaImg);

    //Array con la lista de extensiones que permitiremos
    let permittedExt = [".jpg", ".jpeg", ".png", ".gif", ".svg"];

    //Si la extensión (en minúsculas) no está en el array, lanzamos error
    if (!permittedExt.includes(ext.toLowerCase())) {
      throw new Error("Formato no soportado");
    }

    //Obtenemos la ruta que debe tener la carpeta samples
    let samplesDir = path.join(dir, "samples");

    //Aseguramos que exista
    await ensureDir(samplesDir);

    //Creamos la versión miniatura
    let mini = await sharp(rutaImg).resize({ width: 200 });

    //La guardamos en un archivo en la carpeta samples
    mini.toFile(path.join(samplesDir, `${name}-mini${ext}`));

    //Creamos la versión mediana
    let medium = await sharp(rutaImg).resize({ width: 500 });

    //La guardamos en un archivo en la carpeta samples
    medium.toFile(path.join(samplesDir, `${name}-medium${ext}`));

    //Creamos la versión en blanco y negro a partir de la mediana
    let bw = medium.greyscale();

    //La guardamos en un archivo en la carpeta samples
    bw.toFile(path.join(samplesDir, `${name}-bw${ext}`));

    console.log("Imágenes creadas");
  } catch (e) {
    console.log("Hubo un error: ", e.message);
  }
}

main();

//Función para asegurar que exista una carpeta
async function ensureDir(path) {
  try {
    //Intentamos acceder. Si no hay error, existe, no hacemos nada
    await fs.access(path);

    //console.log("existe");
  } catch (e) {
    //console.log("no existe");

    //Si hay error, no existe, la creamos
    fs.mkdir(path);
    console.log("Carpeta samples creada");
  }
}
