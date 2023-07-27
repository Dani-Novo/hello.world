/*
Escribe en el editor de la derecha el SQL necesario para crear una tabla llamada "students" dentro de la base de datos "bootcamp" que creamos y activamos en las líneas 1 y 2.

Esta tabla debe permitir guardar los siguiente campos:

    - ID numérica, única y que se incremente automáticamente al introducir nuevas filas.

    - Nombre del estudiante

    - Apellidos del estudiante

    - Email del estudiante

    - Teléfono del estudiante

    - DNI del estudiante

    - País del Estudiante

    - Código Postal del estudiante

    - Dirección del estudiante

    - Ciudad del Estudiante 

Configura los campos según creas que es necesario para cada tipo de datos.
*/

CREATE DATABASE IF NOT EXISTS bootcamp;
USE bootcamp;

	#	Escribe a continuación el código SQL solicitado:
    
DROP TABLE IF EXISTS students;

CREATE TABLE students
(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    telefono VARCHAR(50) NOT NULL,
    dni VARCHAR(50) NOT NULL,
    pais VARCHAR(50) NOT NULL,
    codigo_postal INT UNSIGNED NOT NULL,
    direccion VARCHAR(100) NOT NULL,
    ciudad VARCHAR(50) NOT NULL
);