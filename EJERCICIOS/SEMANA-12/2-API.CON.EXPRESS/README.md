# API CON EXPRESS

En los ejercicios de la anterior semana había un ejercicio que proponía crear un programa de Node que guardaba en un archivo json información de fechas y eventos. Este programa funcionaba usando el terminal.

Esta semana tienes que hacer una API en Express que haga lo mismo pero usando peticiones HTTP.

Tienes que crear estas rutas y métodos:

    - GET a la ruta "/list": devuelve todos los eventos guardados en el archivo "data.json".

    - POST a la ruta "/new": guarda un nuevo evento en el archivo "data.json", tienes que enviar los datos necesarios (date y event) usando el body de la petición.

(El archivo "data.json" que contiene un array vacío ya está creado en el mismo directorio que el "index.js")

Bonus: valida con Joi (ver vídeo de pre-work de esta semana) que los datos enviados a la ruta "/new" tienen el formato correcto.
