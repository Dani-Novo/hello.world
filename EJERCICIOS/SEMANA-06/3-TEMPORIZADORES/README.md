# TEMPORIZADORES

Crea un programa que imprima en la consola cada 5 segundos el tiempo que ha pasado desde la ejecución del mismo. Formatea el tiempo para que se muestren los segundos, los minutos, las horas y los días desde la ejecución.

Ejemplo de lo que debería imprimir en la consola:

    ...
    Han pasado 0 días, 0 horas, 1 minuto y 20 segundos desde la ejecución del programa
    Han pasado 0 días, 0 horas, 1 minuto y 25 segundos desde la ejecución del programa
    ...

Haz que el texto que imprima respete los singulares y plurales (ej: 1 minuto, 30 segundos).

(Ten en cuenta que por la forma que funcionan los temporizadores y las fechas en JavaScript puede que tengas alguna desviación de +/- 1 segundo. No te preocupes por eso.)

Cuando tengas eso hecho crea una función que se encargue de parar el temporizador anterior después de un tiempo arbitrario.

Esta función recibirá 2 parámetros: un número y una letra: D, H, M o S (correspondiente a Días, Horas, Minutos o Segundos). Estos parámetros determinarán el tiempo que tardará la función en parar el temporizador inicial (ej. los parámetros 2, "M" harán que el temporizador se pare a los 2 minutos).

Cuando pare el temporizador debe mostrar un mensaje en la consola indicando que se paró.
