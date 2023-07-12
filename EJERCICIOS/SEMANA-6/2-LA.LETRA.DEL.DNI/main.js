"use strict";

/* Crea una funcón que reciba un DNI y lo valide.

El Documento Nacional de Identidad de España (DNI) es el documento de identidad que se expide en España, cada DNI tiene un identificador único compuesto por un número de 8 cifras y una letra, por ejemplo: 99999999-R

¿Sabías que la letra del DNI es un sistema de validación, ya que se obtiene a partir del número mediante un sencillo algoritmo?

Para obtener la letra correspondiente a un número de DNI hay que obtener el resto (en la documentación de JavaScript puedes buscar el operador aritmético para calcular el resto)** **de la división del número entre 23. Ese resto será un número entre 0 y 22. Si usamos ese número como índice en el siguiente Array la letra será la correspondiente a ese índice:

    - const letras = [ "T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

Tienes que crear una función en el archivo index.js de la derecha que reciba un DNI completo con este formato: 00000000-T (la letra puede ser mayúscula o minúscula) y debe hacer las siguientes comprobaciones:

    1.Lo que se ha introducido es un String con 10 caracteres (los 8 números, el guión y la letra).

    2.Si separamos el String por el guión tendremos dos partes:

        a.La primera parte (antes del guion) debe tener 8 números.

        b.La segunda parte (después del guion) debe ser un único caracter y no un número.

    3.La letra (segunda parte) debe ser la correcta según el algoritmo explicado anteriormente.

Si se cumplen todas las comprobaciones, se mostrará un mensaje en consola indicando que es un DNI válido.

Si alguna de las comprobaciones falla, lanzará un Error de JavaScript  que diga "Se ha producido un error:" y el mensaje correspondiente. Para esto tienes que usar throw y el objeto Error de JavaScript. */

const letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
];

function validateDNI(dni) {
  try {
    //Lo que se ha introducido es un String con 10 caracteres (los 8 números, el guión y la letra).
    if (typeof dni !== "string" || dni.length !== 10) {
      throw new Error("Formato incorrecto");
    }

    //Si separamos el String por el guión tendremos dos partes:
    let partes = dni.split("-");

    if (partes.length !== 2) {
      throw new Error("Debe llevar un guion entre los números y la letra");
    }

    let [numeros, letra] = partes;

    //La primera parte (antes del guion) debe tener 8 números.
    if (numeros.length !== 8 || isNaN(numeros)) {
      throw new Error("La primera parte deben ser 8 dígitos");
    }

    //La segunda parte (después del guion) debe ser un único caracter y no un número.
    if (letra.length !== 1 || !isNaN(letra)) {
      throw new Error("La segunda parte debe ser una letra");
    }

    //La letra (segunda parte) debe ser la correcta según el algoritmo explicado anteriormente.

    let letraCorrectaIndex = numeros % 23;

    let letraCorrecta = letras[letraCorrectaIndex];

    if (letra.toUpperCase() !== letraCorrecta) {
      throw new Error("La letra no coincide");
    }

    console.log("DNI válido");
  } catch (error) {
    console.error("Se ha producido un error: ", error.message);
  }
}

validateDNI("00000000-T");

/* EJEMPLOS:
    validateDNI("12345678-Z");
    validateDNI("87654321-Y");
    validateDNI("00000000-A");
    validateDNI("12345678-5");
    validateDNI("1234-5678"); */
