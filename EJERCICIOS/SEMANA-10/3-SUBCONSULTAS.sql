/*
Copia todo el código del ejercicio anterior (incluyendo el proporcionado y tu solución)
y añade el SQL necesario para seleccionar el nombre y la edad de el/los usuarios con mayor edad.
Para ello tienes que usar subconsultas (…y una pista: la función max de SQL).
*/

	#	Copia aquí el código del ejercicio anterior y escribe abajo de todo tu solución:
DROP DATABASE IF EXISTS bootcamp;
CREATE DATABASE bootcamp;
USE bootcamp;

CREATE TABLE students (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    tlf INT UNSIGNED,
    dni CHAR(11) UNIQUE NOT NULL
);

INSERT INTO students (name, lastname, email, tlf, dni) VALUES 
('Irvin', 'Lethem', 'ilethem0@google.com.au', 993870144, '279948941-9'),
('Kylie', 'Mungan', 'kmungan1@howstuffworks.com', 497494899, '748551874-7'),
('Yul', 'Dibbert', 'ydibbert2@businesswire.com', 776631050, '215649413-4'),
('Tamra', 'Mc Gorley', 'tmcgorley3@studiopress.com', 921948685, '617064473-7'),
('Elmira', 'Imbrey', 'eimbrey4@cpanel.net', 304168000, '178988896-4');

ALTER TABLE students ADD age INT NOT NULL;

UPDATE students SET age = 23 WHERE id = 1;
UPDATE students SET age = 20 WHERE id = 2;
UPDATE students SET age = 27 WHERE id = 3;
UPDATE students SET age = 25 WHERE id = 4;
UPDATE students SET age = 21 WHERE id = 5;

SELECT name, age
	FROM students
	WHERE age = (SELECT max(age) FROM students);