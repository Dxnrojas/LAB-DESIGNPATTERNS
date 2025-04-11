const { getUsersFromDb, createUserFromDb } = require("../db/user.db");

const obtenerUsuarios = async (req, res) => {
  const datosUsuario = getUsersFromDb();
  res.json(datosUsuario);
};

const crearUsuario = async (req, res) => {
  const { user, name, password } = req.body;

  if (!user || !name || !password) {
    return res.status(400).json({ message: "Ops, faltan datos" });
  }

  const nuevoUsuario = { user, name, password };
  console.log("Succesfully", nuevoUsuario);

  createUserFromDb(nuevoUsuario);
  res.json({ message: "Usuario registrado" });
};

const iniciarSesion = async (req, res) => {
  const { user, password } = req.body;

  console.log("Mostrar: " + user, password);

  if (!user || !password) {
    return res
      .status(400)
      .json({ message: "Complete all the inputs", success: false });
  }

  const todosUsuarios = getUsersFromDb();
  console.log(todosUsuarios);

  const usuarioEncontrado = getUsersFromDb().find(
    (u) => u.user === user && u.password === password
  );

  console.log(usuarioEncontrado);

  if (!usuarioEncontrado) {
    return res.status(401).json({
      message: "Usuario no existe o contraseña incorrecta",
      success: false,
    });
  }

  console.log("Inicio de sesión exitoso:", usuarioEncontrado);
  res.json({ message: "Inicio de sesión exitoso", success: true });
};

module.exports = {
  getUsers: obtenerUsuarios,
  createUser: crearUsuario,
  loginUser: iniciarSesion,
};