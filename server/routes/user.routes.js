const express = require("express");
const enrutadorUsuario = express.Router(); // Intancia de express que ayuda a definir las rutas en una parte e importarlas en otra
const { getUsers, createUser, loginUser } = require("../controllers/user.controllers");

enrutadorUsuario.get("/users", getUsers);
enrutadorUsuario.post("/user-register", createUser);
enrutadorUsuario.post("/user-login", loginUser);

module.exports = enrutadorUsuario; //exporto lo que acabo de definir en la linea 2