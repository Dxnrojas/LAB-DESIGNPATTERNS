const express = require("express");
const enrutadorPublicacion = express.Router();
const { getPosts, createPost } = require("../controllers/post.controllers");

enrutadorPublicacion.get("/post", getPosts);
enrutadorPublicacion.post("/create-post", createPost);

module.exports = enrutadorPublicacion;