const express = require("express");
const path = require("path");
const rutasUsuario = require("./server/routes/user.routes"); //variable que guarda el export de users.routes
const rutasPublicacion = require("./server/routes/post.routes");

const aplicacion = express();

aplicacion.use(express.json());
aplicacion.use("/app1", express.static(path.join(__dirname, "app1")));
aplicacion.use("/app2", express.static(path.join(__dirname, "app2")));

aplicacion.use("/", rutasUsuario);
aplicacion.use("/", rutasPublicacion);

aplicacion.listen(3000);
console.log("Servidor en: http://localhost:3000");