# AGENDA EN LA LÍNEA DE COMANDOS

Crea un programa de node que te permita guardar fechas con descripciones de eventos:

    - Utiliza los argumentos del programa para introducir la fecha y el texto de forma que se guarde en un archivo .json.

    - Añade también un argumento que imprima los eventos por pantalla.

El programa debe permitir ejecutar un comando como los siguientes para guardar eventos:

    - node index.js --date 2022/12/25 --event "Día de Navidad"

    - node index.js --data 2023/01/01 --event "Año nuevo!"

El programa también debe permitir listar los eventos guardados que deben aparecer siempre ordenados por fecha (en orden descendiente):

    - node index.js --list-events

Esto debe listar en la consola algo como esto (el icono del calendario es un emoji):

    - 📆 2023/01/01: Año nuevo

    - 📆 2022/12/25: Día de Navidad

Para simplificar el ejercicio vamos a usar un formato de fecha fácil de manejar en Javascript: YYYY/MM/DD
