const getDB = require("../../database/db");

const createUser = async (req, res) => {
  try {
    const connect = await getDB();
    const { name, mail, pwd } = req.body;

    if (!name || !mail || !pwd) return res.status(400).send("Faltan datos");

    const [user] = await connect.query(
      `INSERT INTO usuarios (nombre, email, contraseña) VALUES (?,?,SHA2(?,512))`,
      [name, mail, pwd]
    );

    connect.release();

    res.status(200).send({
      status: "OK",
      message: "Usuario creado correctamente",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = createUser;
