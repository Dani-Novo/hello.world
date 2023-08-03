const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

const { list, newEvent } = require("./controllers.js");

app.use(cors());

//Middleware que traduce el body
app.use(express.json());

// Escribe aquí el código solicitado

app.get("/list", list);

app.post("/new", newEvent);

//Middlewares de error
app.use((error, req, res, next) => {
  res.send({
    message: "Hubo un error: " + error.message,
  });
});

app.use((req, res, next) => {
  res.status(404).send({
    message: "Página no encontrada",
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
