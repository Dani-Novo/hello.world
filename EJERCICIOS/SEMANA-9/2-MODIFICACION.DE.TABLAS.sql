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
  
CREATE TABLE addresses
(
	addressId INT UNSIGNED AUTO_INCREMENT,
    direccion VARCHAR(100) NOT NULL,
    ciudad VARCHAR(50) NOT NULL,
    codigo_postal INT UNSIGNED NOT NULL,
    pais VARCHAR(50) NOT NULL,
    PRIMARY KEY (addressId)
);

ALTER TABLE students
	DROP direccion,
    DROP ciudad,
    DROP codigo_postal,
    DROP pais;
    
ALTER TABLE students
	ADD addressId INT UNSIGNED,
    ADD FOREIGN KEY (addressId) REFERENCES addresses(addressId);