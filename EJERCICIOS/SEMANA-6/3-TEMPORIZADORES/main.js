"use strict";

/* Crea un programa que imprima en la consola cada 5 segundos el tiempo que ha pasado desde la ejecución del mismo. Formatea el tiempo para que se muestren los segundos, los minutos, las horas y los días desde la ejecución.

Ejemplo de lo que debería imprimir en la consola:

    ...
    Han pasado 0 días, 0 horas, 1 minuto y 20 segundos desde la ejecución del programa
    Han pasado 0 días, 0 horas, 1 minuto y 25 segundos desde la ejecución del programa
    ...

Haz que el texto que imprima respete los singulares y plurales (ej: 1 minuto, 30 segundos).

Cuando tengas eso hecho crea una función que se encargue de parar el temporizador anterior después de un tiempo arbitrario.

Esta función recibirá 2 parámetros: un número y una letra: D, H, M o S (correspondiente a Días, Horas, Minutos o Segundos). Estos parámetros determinarán el tiempo que tardará la función en parar el temporizador inicial (ej. los parámetros 2, "M" harán que el temporizador se pare a los 2 minutos).

Cuando pare el temporizador debe mostrar un mensaje en la consola indicando que se paró. */

function formatoTiempo(duracion) {
  const dias = Math.floor(duracion / (24 * 60 * 60));
  const horas = Math.floor((duracion % (24 * 60 * 60)) / (60 * 60));
  const minutos = Math.floor((duracion % (60 * 60)) / 60);
  const segundos = Math.round(duracion % 60);

  let stringDeTiempo = "";

  if (dias >= 0) {
    stringDeTiempo += dias === 1 ? "1 día" : `${dias} días`;
  }

  if (horas >= 0) {
    stringDeTiempo += stringDeTiempo !== "" ? ", " : "";
    stringDeTiempo += horas === 1 ? "1 hora" : `${horas} horas`;
  }

  if (minutos >= 0) {
    stringDeTiempo += stringDeTiempo !== "" ? ", " : "";
    stringDeTiempo += minutos === 1 ? "1 minuto" : `${minutos} minutos`;
  }

  if (segundos >= 0) {
    stringDeTiempo += stringDeTiempo !== "" ? " y " : "";
    stringDeTiempo += segundos === 1 ? "1 segundo" : `${segundos} segundos`;
  }

  return stringDeTiempo;
}

function imprimirLapsoTiempo() {
  const tiempoInicio = new Date().getTime() / 1000;

  const intervaloTiempo = setInterval(() => {
    const tiempoActual = new Date().getTime() / 1000;
    const tiempoTranscurrido = tiempoActual - tiempoInicio;
    const tiempoFormateado = formatoTiempo(tiempoTranscurrido);

    console.log(
      `Han pasado ${tiempoFormateado} desde la ejecución del programa`
    );
  }, 5000);

  return intervaloTiempo;
}

function pararTiempo(tiempo, unidad) {
  const tiempoEnSegundos = conversionSegundos(tiempo, unidad);

  setTimeout(() => {
    clearInterval(intervaloTiempo);
    console.log("El temporizador se ha parado.");
  }, tiempoEnSegundos * 1000);
}

function conversionSegundos(tiempo, unidad) {
  switch (unidad.toUpperCase()) {
    case "D":
      return tiempo * 24 * 60 * 60;
    case "H":
      return tiempo * 60 * 60;
    case "M":
      return tiempo * 60;
    case "S":
      return tiempo;
    default:
      throw new Error("Unidad de tiempo inválida.");
  }
}

const intervaloTiempo = imprimirLapsoTiempo();

pararTiempo(2, "M");
