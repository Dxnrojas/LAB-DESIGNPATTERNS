let publicaciones = [];

const getPostFromDb = () => {
  return publicaciones;
};

const createPostFromDb = (publicacion) => {
  publicaciones.push(publicacion);
  return publicaciones;
};

module.exports = {
  getPostFromDb,
  createPostFromDb,
};