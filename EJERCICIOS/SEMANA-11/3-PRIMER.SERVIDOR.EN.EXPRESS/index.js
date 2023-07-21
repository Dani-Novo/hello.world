const express = require("express");
const app = express();
const port = 8080;

//MIDDLEWARE

app.use(logData);

//ENDPOINTS

//Una ruta que devuelva la hora actual.
app.get("/time", getTime);

//Una ruta que devuelva el directorio del archivo dónde se haya el código del servidor.
app.get("/dir", getDir);

//Ruta que provoca un error
app.get("/error-forzado", (req, res, next) => {
  return next(new Error("Este es un error generado intencionadamente"));
});

//MIDDLEWARES DE ERROR

//Error
//(4 parametros, el primero es el error)
app.use((err, req, res, next) => {
  console.log("ERROR: " + err.message);
  res.status(err.code ?? 500);
  res.send("Algo salió mal...");
});

//404
//(Es por donde entra cuando no quedan opciones, tiene que ir al final)
app.use((req, res) => {
  res.status(404);
  res.send("Página no encontrada");
});

//Indicamos al servidor que escuche el puerto inicado
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

////////////////////////////////
// FUNCIONES (suelen estar repartidas en archivos externos)

//Funciones de los endpoints

function getTime(req, res, next) {
  try {
    //Obtenemos la fecha y hora
    let now = new Date();

    //Mandamos respuesta
    res.send(`Son las ${now.getHours()}:${now.getMinutes()}`);
  } catch (e) {
    //Si hay error, lo mandamos al middleware de error
    next(e);
  }
}

function getDir(req, res, next) {
  try {
    //Mandamos respuesta
    res.send("Ruta del servidor: " + process.mainModule.path);
  } catch (e) {
    //Si hay error, lo mandamos al middleware de error
    next(e);
  }
}

//Función del middleware que muestra datos por la consola
function logData(req, res, next) {
  console.log("Ruta: " + req.url);
  console.log("Método: " + req.method);

  //IMPORTANTISIMO: todos los middlewares (excepto los de error) deben llevar llevar next()
  next();
}
