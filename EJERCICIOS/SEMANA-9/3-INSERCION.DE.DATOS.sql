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

	#	Escribe a continuación el código SQL solicitado:
    
INSERT INTO addresses (addressId, pais, codigo_postal, direccion, ciudad) VALUES
	(DEFAULT, 'Indonesia',83297,'98339 Loftsgordon Road','Babakanbandung'),
    (DEFAULT, 'Philippines',44455,'74641 Dwight Avenue','Bilar'),
    (DEFAULT, 'Indonesia',62965,'9510 Milwaukee Street','Sumberejo'),
    (DEFAULT, 'Norway',54756,'8902 Doe Crossing Alley','Steinkjer'),
    (DEFAULT, 'United States',51471,'8616 Stephen Hill','Charleston');

INSERT INTO students (id, nombre, apellidos, email, telefono, dni, addressId) VALUES
	(DEFAULT, 'Irvin', 'Lethem', 'ilethem0@google.com.au','993870144','279948941-9', 1),
    (DEFAULT, 'Kylie','Mungan','kmungan1@howstuffworks.com','497494899','748551874-7', 2),
    (DEFAULT, 'Yul','Dibbert','ydibbert2@businesswire.com','776631050','215649413-4', 3),
    (DEFAULT, 'Tamra','Mc Gorley','tmcgorley3@studiopress.com','921948685','617064473-7', 4),
    (DEFAULT, 'Elmira','Imbrey','eimbrey4@cpanel.net','304168000','178988896-4', 5);