/*
Partiendo de la estructura de tablas resultante de la realización de los ejercicios anteriores crea los "INSERT" necesarios para introducir estos datos en las tablas de la base de datos "bootcamp".

    id,first_name,last_name,email,tlf,DNI,country,cp,address,city
    ------------------------------------------------------
    1,Irvin,Lethem,ilethem0@google.com.au,993870144,279948941-9,Indonesia,83297,98339 Loftsgordon Road,Babakanbandung
    2,Kylie,Mungan,kmungan1@howstuffworks.com,497494899,748551874-7,Philippines,44455,74641 Dwight Avenue,Bilar
    3,Yul,Dibbert,ydibbert2@businesswire.com,776631050,215649413-4,Indonesia,62965,9510 Milwaukee Street,Sumberejo
    4,Tamra,Mc Gorley,tmcgorley3@studiopress.com,921948685,617064473-7,Norway,54756,8902 Doe Crossing Alley,Steinkjer
    5,Elmira,Imbrey,eimbrey4@cpanel.net,304168000,178988896-4,United States,51471,8616 Stephen Hill,Charleston
*/

CREATE DATABASE IF NOT EXISTS bootcamp;
USE bootcamp;

	#	Pega a continuación el SQL necesario del ejercicio anterior

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

	#	Escribe a continuación el código SQL solicitado:
    
INSERT INTO addresses (addressId, pais, codigo_postal, direccion, ciudad, studentsId) VALUES
	(DEFAULT, 'Indonesia',83297,'98339 Loftsgordon Road','Babakanbandung', 1),
    (DEFAULT, 'Philippines',44455,'74641 Dwight Avenue','Bilar', 2),
    (DEFAULT, 'Indonesia',62965,'9510 Milwaukee Street','Sumberejo', 3),
    (DEFAULT, 'Norway',54756,'8902 Doe Crossing Alley','Steinkjer', 4),
    (DEFAULT, 'United States',51471,'8616 Stephen Hill','Charleston', 5);

INSERT INTO students (id, nombre, apellidos, email, telefono, dni) VALUES
	(DEFAULT, 'Irvin', 'Lethem', 'ilethem0@google.com.au','993870144','279948941-9'),
    (DEFAULT, 'Kylie','Mungan','kmungan1@howstuffworks.com','497494899','748551874-7'),
    (DEFAULT, 'Yul','Dibbert','ydibbert2@businesswire.com','776631050','215649413-4'),
    (DEFAULT, 'Tamra','Mc Gorley','tmcgorley3@studiopress.com','921948685','617064473-7'),
    (DEFAULT, 'Elmira','Imbrey','eimbrey4@cpanel.net','304168000','178988896-4');