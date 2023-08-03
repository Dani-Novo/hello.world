"use strict";

const getDB = require("./db");

//Escribe a partir de aquí el código solicitado

async function createDB() {
  try {
    // Crear una conexión a la base de datos
    const connect = await getDB();

    // Crear la base de datos "web" si no existe
    await connect.query("CREATE DATABASE IF NOT EXISTS web");
    await connect.query("USE web");

    // Borrar tablas existentes si es necesario
    await connect.query("DROP TABLE IF EXISTS likes");
    await connect.query("DROP TABLE IF EXISTS photos");
    await connect.query("DROP TABLE IF EXISTS users");

    // Crear la tabla "users"
    await connect.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(100) NOT NULL UNIQUE,
        name VARCHAR(255),
        registration_date DATETIME DEFAULT CURRENT_TIMESTAMP,
        active BOOLEAN DEFAULT FALSE
      )
    `);

    // Crear la tabla "photos"
    await connect.query(`
      CREATE TABLE IF NOT EXISTS photos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT,
        photo_file_name VARCHAR(255) NOT NULL,
        creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
      )
    `);

    // Crear la tabla "likes"
    await connect.query(`
      CREATE TABLE IF NOT EXISTS likes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        photo_id INT NOT NULL,
        creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
        FOREIGN KEY (photo_id) REFERENCES photos(id) ON DELETE CASCADE
      )
    `);

    console.log("Base de datos y tablas creadas con éxito.");
    // Cerrar la conexión a la base de datos
    connect.release();

    process.exit();
  } catch (error) {
    console.error("Error al crear la base de datos y las tablas:", error);
  }
}

createDB();
