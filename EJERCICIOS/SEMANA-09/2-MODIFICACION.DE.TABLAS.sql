/*
En el ejercicio anterior la tabla "students" tenía varios campos referidos a la dirección del estudiante: Dirección, Ciudad, Código Postal y País. Pero cuando empezamos a usar esa tabla nos dimos cuenta de un problema; hay varios alumnos que tienen varias direcciones por lo que es necesario hacer las modificaciones necesarias en la base de datos para solucionar esto:

(Por cada alumno se guardarán direcciones diferentes. Es decir, en caso de que dos alumnos sean convivientes, esa dirección aparecería duplicada en la tabla.)

    - Crea una nueva tabla "addresses" con los campos de dirección necesarios.

    - Modifica mediante la sentencia SQL "ALTER TABLE" la tabla "students" que creaste en el ejercicio anterior para eliminar los campos de dirección.

    - Crea los campos necesarios para que las dos tablas estén relacionadas mediante una "FOREIGN KEY".
*/

CREATE DATABASE IF NOT EXISTS bootcamp;
USE bootcamp;

	#	Pega a continuación el CREATE TABLE completo que hiciste ejercicio anterior

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

	#	Escribe a continuación el código SQL solicitado:
   
DROP TABLE IF EXISTS addresses;
  
ALTER TABLE students
	DROP direccion,
    DROP ciudad,
    DROP codigo_postal,
    DROP pais;

CREATE TABLE addresses
(
	addressId INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    direccion VARCHAR(100) NOT NULL,
    ciudad VARCHAR(50) NOT NULL,
    codigo_postal INT UNSIGNED NOT NULL,
    pais VARCHAR(50) NOT NULL,
    studentsId INT UNSIGNED NOT NULL,
    FOREIGN KEY (studentsId) REFERENCES students(id)
);