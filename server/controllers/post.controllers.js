const { getPostFromDb, createPostFromDb } = require("../db/post.db");

const obtenerPublicaciones = async (req, res) => {
    const datosPublicacion = getPostFromDb();
    res.json(datosPublicacion);
};

const crearPublicacion = async (req, res) => {
    const { url, title, bio } = req.body;
  
    if (!title || !bio) {
      return res.status(400).json({ message: "Ops, faltan datos",});
    }
  
    const nuevaPublicacion = { url, title, bio };
    console.log("Super el registro:", nuevaPublicacion);
  
    createPostFromDb(nuevaPublicacion);
    res.json({ message: "Post registrado" });
};
  
module.exports = {
    getPosts: obtenerPublicaciones,
    createPost: crearPublicacion
}