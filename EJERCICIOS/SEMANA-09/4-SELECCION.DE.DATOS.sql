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

	#	Escribe a continuación el código SQL solicitado:

SELECT nombre, apellidos, telefono FROM students ORDER BY apellidos;

SELECT pais, count(*) AS total_estudiantes FROM addresses GROUP BY pais;